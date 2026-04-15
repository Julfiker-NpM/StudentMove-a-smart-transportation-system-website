import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { feedbackSchema } from "@/lib/validators";

export async function GET() {
  const data = await prisma.feedback.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { name: true, email: true },
      },
    },
    take: 20,
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = feedbackSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const created = await prisma.feedback.create({
    data: parsed.data,
  });

  return NextResponse.json(created, { status: 201 });
}
