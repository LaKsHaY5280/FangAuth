"use server";
import * as z from "zod";
import bcrypt from "bcrypt";
import { SignupSchema } from "@/lib/schemas";
import { db } from "../db";
import { getUserByEmail } from "@/data/user";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedpassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: `Email already exists`,
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedpassword,
    },
  });

  // Send email verification

  return { success: true };
};
