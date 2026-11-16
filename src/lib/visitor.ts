import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "visitorToken";

export async function getVisitorToken(): Promise<string> {
  const cookieStore = await cookies();

  let visitorToken = cookieStore.get(COOKIE_NAME)?.value;

  // Generate a new token if the visitor does not have a valid one.
  if (!visitorToken || !/^[0-9a-f-]{36}$/i.test(visitorToken)) {
    visitorToken = randomUUID();

    cookieStore.set(COOKIE_NAME, visitorToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return visitorToken;
}
