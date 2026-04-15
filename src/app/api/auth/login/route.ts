import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  response.cookies.set(AUTH_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
