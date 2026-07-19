import { getApiBaseUrl } from "@/lib/api";

export interface StreamCallSession {
  apiKey: string;
  token: string;
  userId: string;
  userName: string;
  userImage?: string;
  callId: string;
  callType: string;
}

export async function fetchStreamCallSession(
  lessonId: string,
  sessionToken: string,
): Promise<StreamCallSession> {
  const res = await fetch(`${getApiBaseUrl()}/api/stream/call`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken}`,
    },
    body: JSON.stringify({ lessonId }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? `Stream session request failed (${res.status})`);
  }

  return res.json();
}
