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
  category: z.enum(["BUG", "SUGGESTION", "COMPLAINT"]).default("SUGGESTION"),
  subject: z.string().min(3),
  comment: z.string().min(5),
});

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().min(11).max(15),
  studentId: z.string().regex(/^\d{16}$/, "Student ID must be 16 digits"),
  university: z.string().min(3),
  password: z.string().min(6),
});

export const notificationSettingsSchema = z.object({
  notifyDelay: z.boolean(),
  notifyOffer: z.boolean(),
  notifySystem: z.boolean(),
  preferredLanguage: z.enum(["en", "bn"]),
});
