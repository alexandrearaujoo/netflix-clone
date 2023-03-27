import { z } from 'zod';

export type AuthSchema = z.infer<typeof authSchema>;

export const authSchema = z.object({
  name: z.string().min(2, 'Minimum of 2 characters').nullish(),
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(4, 'The password must be between 4 and 60 characters long.')
    .max(60, 'The password must be between 4 and 60 characters long.')
});
