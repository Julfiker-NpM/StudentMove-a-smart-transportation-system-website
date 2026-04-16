import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { AUTH_COOKIE } from "@/lib/auth";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userId = cookieStore.get(AUTH_COOKIE)?.value;
  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      studentId: true,
      university: true,
      preferredLanguage: true,
      notifyDelay: true,
      notifyOffer: true,
      notifySystem: true,
      role: true,
      emailVerified: true,
    },
  });
}
