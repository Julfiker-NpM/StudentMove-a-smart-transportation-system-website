import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { notificationSettingsSchema } from "@/lib/validators";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    notifyDelay: user.notifyDelay,
    notifyOffer: user.notifyOffer,
    notifySystem: user.notifySystem,
    preferredLanguage: user.preferredLanguage,
  });
}

export async function PATCH(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = notificationSettingsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: parsed.data,
  });

  return NextResponse.json({
    notifyDelay: updated.notifyDelay,
    notifyOffer: updated.notifyOffer,
    notifySystem: updated.notifySystem,
    preferredLanguage: updated.preferredLanguage,
  });
}
