import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.notification.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(data);
}
