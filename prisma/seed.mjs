import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const demoPasswordHash = await bcrypt.hash(
    process.env.DEMO_LOGIN_PASSWORD ?? "student123",
    10,
  );

  const user = await prisma.user.upsert({
    where: { email: "student@example.com" },
    update: { passwordHash: demoPasswordHash },
    create: {
      name: "Demo Student",
      email: "student@example.com",
      passwordHash: demoPasswordHash,
      role: "STUDENT",
    },
  });

  await prisma.routeSuggestion.createMany({
    data: [
      {
        origin: "Uttara",
        destination: "Dhanmondi",
        recommendedBy: "AI Route Engine",
        rankScore: 95,
      },
      {
        origin: "Mirpur",
        destination: "Farmgate",
        recommendedBy: "AI Route Engine",
        rankScore: 88,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.notification.createMany({
    data: [
      {
        title: "Bus Delay Alert",
        message: "Route Dhanmondi line is delayed by 12 minutes.",
      },
      {
        title: "New Offer",
        message: "10% discount on monthly subscription until Friday.",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.subscription.create({
    data: {
      userId: user.id,
      plan: "MONTHLY",
      status: "ACTIVE",
      amountBdt: 1800,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
