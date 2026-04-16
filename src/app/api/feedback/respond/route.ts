import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function PATCH(request: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = (await request.json()) as {
    feedbackId?: string;
    adminReply?: string;
    status?: "OPEN" | "RESOLVED";
  };
  if (!body.feedbackId || !body.adminReply || !body.status) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const updated = await prisma.feedback.update({
    where: { id: body.feedbackId },
    data: {
      adminReply: body.adminReply,
      status: body.status,
    },
  });

  return NextResponse.json(updated);
}
