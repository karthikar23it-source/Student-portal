import { z } from 'zod';

export const postOpportunitySchema = z.object({
  title: z.string().trim().min(5, 'Title must contain at least 5 characters.'),

  organization: z.string().trim().min(1, 'Organization is required.'),

  category: z.enum(['Internship', 'Hackathon', 'Research', 'Event', 'Scholarship'], {
    message: 'Select a category.',
  }),

  deadline: z
    .string()
    .min(1, 'Deadline is required.')
    .refine((value) => {
      const selectedDate = new Date(value);
      const today = new Date();

      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      return selectedDate > today;
    }, 'Deadline must be in the future.'),

  description: z.string().trim().min(20, 'Description must contain at least 20 characters.'),
});

export type PostOpportunityFormData = z.infer<typeof postOpportunitySchema>;
