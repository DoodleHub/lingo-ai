import { createClerkClient, verifyToken } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

import { getLanguageByCode } from "@/data/languages";
import { getLessonById } from "@/data/lessons";

const STREAM_API_KEY = process.env.STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_API_SECRET;
const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;

// One-to-one AI teacher room per lesson per learner - "audio_room" call type
// so the Vision Agent (joining later as an admin host) can `goLive()` into it.
const CALL_TYPE = "audio_room";

async function getAuthenticatedUserId(request: Request): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  const sessionToken = authHeader?.startsWith("Bearer ") ? authHeader.slice("Bearer ".length) : null;
  if (!sessionToken || !CLERK_SECRET_KEY) return null;

  try {
    const payload = await verifyToken(sessionToken, { secretKey: CLERK_SECRET_KEY });
    return payload.sub;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  if (!STREAM_API_KEY || !STREAM_API_SECRET || !CLERK_SECRET_KEY) {
    return Response.json({ error: "Stream is not configured on the server" }, { status: 500 });
  }

  const userId = await getAuthenticatedUserId(request);
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const lessonId = body?.lessonId;
  if (typeof lessonId !== "string" || lessonId.length === 0) {
    return Response.json({ error: "lessonId is required" }, { status: 400 });
  }

  const lesson = getLessonById(lessonId);
  if (!lesson) {
    return Response.json({ error: "Unknown lesson" }, { status: 404 });
  }
  const language = getLanguageByCode(lesson.languageCode);

  const clerkClient = createClerkClient({ secretKey: CLERK_SECRET_KEY });
  const user = await clerkClient.users.getUser(userId);
  const userName = user.fullName ?? user.firstName ?? "Learner";

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);
  const callId = `lesson-${lesson.id}-${userId}`.toLowerCase().replace(/[^a-z0-9_-]/g, "-");

  await streamClient.upsertUsers([{ id: userId, name: userName, image: user.imageUrl }]);

  await streamClient.video.call(CALL_TYPE, callId).getOrCreate({
    data: {
      created_by_id: userId,
      members: [{ user_id: userId }],
      custom: {
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        languageCode: lesson.languageCode,
        languageName: language?.name ?? lesson.languageCode,
      },
    },
  });

  const token = streamClient.generateUserToken({
    user_id: userId,
    validity_in_seconds: 60 * 60 * 4,
  });

  return Response.json({
    apiKey: STREAM_API_KEY,
    token,
    userId,
    userName,
    userImage: user.imageUrl,
    callId,
    callType: CALL_TYPE,
  });
}
