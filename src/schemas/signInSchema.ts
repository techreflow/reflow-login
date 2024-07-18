import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Invalid email address",
    }),
  password: z.string(),
});
