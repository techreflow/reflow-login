import { z } from "zod";

export const firstNameValidation = z
  .string()
  .min(2, { message: "First name must be at least 2 characters long" })
  .max(20, { message: "First name must not be more than 20 characters long" })
  .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters" });

export const lastNameValidation = z
  .string()
  .min(2, { message: "Last name must be at least 2 characters long" })
  .max(20, { message: "Last name must not be more than 20 characters long" })
  .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters" });

export const emailValidation = z
  .string()
  .email({ message: "Invalid email address" })
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Invalid email address",
  });

export const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
  });

export const signUpSchema = z.object({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  email: emailValidation,
  password: passwordValidation,
});
