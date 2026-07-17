import { z } from 'zod';

import { COLLEGE_EMAIL_REGEX, PASSWORD_REGEX } from '../constants/auth.constants';

export const registerSchema = z
  .object({
    collegeEmail: z
      .string()
      .regex(COLLEGE_EMAIL_REGEX, 'Please use your official college email (@psnacet.edu.in)'),

    password: z
      .string()
      .regex(
        PASSWORD_REGEX,
        'Password is too weak. Use 8+ characters with uppercase, lowercase, number and symbol.'
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
