import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { AUTH_COOKIE, AUTH_MAX_AGE_SECONDS } from "@/lib/auth";
import { signupSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim().toLowerCase(),
    phone: String(formData.get("phone") ?? "").trim(),
    studentId: String(formData.get("studentId") ?? "").trim(),
    university: String(formData.get("university") ?? "").trim(),
    password: String(formData.get("password") ?? "").trim(),
  };
  const parsed = signupSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.redirect(new URL("/signup?error=invalid", request.url), 303);
  }
  const { name, email, phone, studentId, university, password } = parsed.data;

  const existing = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { studentId }],
    },
  });
  if (existing?.email === email) {
    return NextResponse.redirect(new URL("/signup?error=exists", request.url), 303);
  }
  if (existing?.studentId === studentId) {
    return NextResponse.redirect(new URL("/signup?error=studentid", request.url), 303);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      studentId,
      university,
      passwordHash,
      role: "STUDENT",
      emailVerified: false,
    },
  });

  const response = NextResponse.redirect(new URL("/dashboard", request.url), 303);
  response.cookies.set(AUTH_COOKIE, createdUser.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_MAX_AGE_SECONDS,
  });

  return response;
}
