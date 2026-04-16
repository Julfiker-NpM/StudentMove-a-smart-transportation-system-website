import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(user);
}

export async function PATCH(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as Partial<{
    name: string;
    phone: string;
    preferredLanguage: "en" | "bn";
  }>;

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name?.trim() || user.name,
      phone: body.phone?.trim() || user.phone,
      preferredLanguage: body.preferredLanguage ?? user.preferredLanguage,
    },
  });

  return NextResponse.json(updated);
}
