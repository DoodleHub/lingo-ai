import { useAuth } from "@clerk/expo";
import { Call, CallingState, StreamVideoClient } from "@stream-io/video-react-native-sdk";
import { useCallback, useEffect, useRef, useState } from "react";

import { fetchStreamCallSession, type StreamCallSession } from "@/lib/stream";

export type AudioCallStatus = "connecting" | "joined" | "error" | "ended";

export function useAudioCall(lessonId: string) {
  const { getToken } = useAuth();
  // `getToken` is a new function reference on every render (not memoized by
  // Clerk) - read it through a ref so the join effect below doesn't depend
  // on it and re-run (leave + rejoin the call) on unrelated re-renders.
  const getTokenRef = useRef(getToken);
  useEffect(() => {
    getTokenRef.current = getToken;
  }, [getToken]);

  const [status, setStatus] = useState<AudioCallStatus>("connecting");
  const [client, setClient] = useState<StreamVideoClient>();
  const [call, setCall] = useState<Call>();
  const [session, setSession] = useState<StreamCallSession>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let joinedClient: StreamVideoClient | undefined;
    let joinedCall: Call | undefined;

    (async () => {
      setStatus("connecting");
      setErrorMessage(undefined);

      const sessionToken = await getTokenRef.current();
      if (!sessionToken) throw new Error("You need to be signed in to start a lesson.");

      const streamSession = await fetchStreamCallSession(lessonId, sessionToken);
      if (cancelled) return;
      setSession(streamSession);

      const tokenProvider = async () => {
        const freshToken = await getTokenRef.current();
        if (!freshToken) throw new Error("You need to be signed in to start a lesson.");
        const refreshed = await fetchStreamCallSession(lessonId, freshToken);
        return refreshed.token;
      };

      joinedClient = StreamVideoClient.getOrCreateInstance({
        apiKey: streamSession.apiKey,
        user: {
          id: streamSession.userId,
          name: streamSession.userName,
          image: streamSession.userImage,
        },
        token: streamSession.token,
        tokenProvider,
      });
      if (cancelled) return;
      setClient(joinedClient);

      joinedCall = joinedClient.call(streamSession.callType, streamSession.callId, {
        reuseInstance: true,
      });
      await joinedCall.join();
      if (cancelled) return;

      // Audio-only lesson - never publish video.
      try {
        await joinedCall.camera.disable();
      } catch (err) {
        console.error("Failed to disable camera", err);
      }
      try {
        await joinedCall.microphone.enable();
      } catch (err) {
        console.error("Failed to enable microphone", err);
      }
      if (cancelled) return;

      setCall(joinedCall);
      setStatus("joined");
    })().catch((err) => {
      if (cancelled) return;
      console.error("Failed to join audio call", err);
      setErrorMessage(err instanceof Error ? err.message : "Failed to join the call.");
      setStatus("error");
    });

    return () => {
      cancelled = true;
      if (joinedCall && joinedCall.state.callingState !== CallingState.LEFT) {
        joinedCall.leave().catch((err) => console.error("Failed to leave call", err));
      }
      joinedClient?.disconnectUser().catch((err) => console.error("Failed to disconnect", err));
      setCall(undefined);
      setClient(undefined);
    };
  }, [lessonId, retryCount]);

  const endCall = useCallback(async () => {
    if (call && call.state.callingState !== CallingState.LEFT) {
      try {
        await call.leave();
      } catch (err) {
        console.error("Failed to leave call", err);
      }
    }
    setStatus("ended");
  }, [call]);

  const retry = useCallback(() => setRetryCount((count) => count + 1), []);

  return { status, client, call, session, errorMessage, endCall, retry };
}
