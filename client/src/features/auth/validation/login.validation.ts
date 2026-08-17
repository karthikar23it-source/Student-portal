import { z } from 'zod';

import { COLLEGE_EMAIL_REGEX } from '../constants/auth.constants';

export const loginSchema = z.object({
  collegeEmail: z
    .string()
    .regex(COLLEGE_EMAIL_REGEX, 'Please use your official college email (@psnacet.edu.in)'),

  password: z.string().min(1, 'Enter your password.'),
});
