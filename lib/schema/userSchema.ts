import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullName: z
    .string()
    .min(2, { message: "Full name is required" })
    .regex(/^[A-Za-z]+$/, { message: "Full name can only contain letters" }),
});
