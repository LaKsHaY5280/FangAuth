"use server";
import * as z from "zod";
import { SignupSchema } from "@/lib/schemas";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  // TODO: Implement authentication logic

  return { success: true };
};
