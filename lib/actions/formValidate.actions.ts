"use server";
import { userSchema } from "../schema/userSchema";

export async function formValidate(previousState: unknown, formData: FormData) {
  // Get the Inputs:
  const fullName = formData.get("name");
  const email = formData.get("email");

  // Validate throw Zod's schema:
  const result = userSchema.safeParse({
    email,
    fullName,
  });

  if (!result.success) {
    const formatted = result.error.format();
    // Return the errors:
    return {
      errorEmail: formatted.email?._errors,
      errorFullName: formatted.fullName?._errors,
    };
  }
}
