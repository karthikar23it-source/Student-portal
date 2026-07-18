import { z } from 'zod';

export const completeProfileSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Enter your full name.')
    .regex(/^[A-Za-z ]+$/, 'Enter your full name.'),

  rollNumber: z.string().regex(/^[0-9]{2}[A-Za-z]{2,5}[0-9]{3}$/, 'Enter a valid roll number.'),

  department: z.string().min(1, 'Select your department.'),

  year: z.enum(['1st', '2nd', '3rd', '4th'], {
    message: 'Select your year.',
  }),

  section: z.string().regex(/^[A-Z]$/, 'Enter your section.'),
});
