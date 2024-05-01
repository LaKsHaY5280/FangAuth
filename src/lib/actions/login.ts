"use server";
import * as z from "zod";
import { LoginSchema } from "@/lib/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  // TODO: Implement authentication logic

  return { success: true };
};
