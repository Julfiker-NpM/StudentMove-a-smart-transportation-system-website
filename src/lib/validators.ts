import { z } from "zod";

export const routeSuggestionSchema = z.object({
  origin: z.string().min(2),
  destination: z.string().min(2),
  recommendedBy: z.string().min(2).default("AI Route Engine"),
  rankScore: z.number().int().min(1).max(100).default(80),
});

export const subscriptionSchema = z.object({
  userId: z.string().min(1),
  plan: z.enum(["MONTHLY", "QUARTERLY", "YEARLY"]),
  amountBdt: z.number().int().positive(),
});

export const feedbackSchema = z.object({
  userId: z.string().min(1),
  subject: z.string().min(3),
  comment: z.string().min(5),
});
