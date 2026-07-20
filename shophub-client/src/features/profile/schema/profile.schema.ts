import { z } from "zod";

export const profileSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .email("Invalid email address"),
});

export type ProfileFormData =
  z.infer<typeof profileSchema>;