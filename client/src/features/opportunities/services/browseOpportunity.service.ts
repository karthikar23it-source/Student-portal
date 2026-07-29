import type { Opportunity } from '../types/opportunityList.types';

export async function browseOpportunities(): Promise<Opportunity[]> {
  return [
    {
      id: 1,
      category: 'Internship',
      title: 'Google Summer of Code 2026',
      organization: 'Google Open Source',
      deadline: 'In 3 days',
      upvotes: 128,
      saved: false,
    },
    {
      id: 2,
      category: 'Hackathon',
      title: 'Smart India Hackathon',
      organization: 'Ministry of Education',
      deadline: 'In 7 days',
      upvotes: 92,
      saved: false,
    },
    {
      id: 3,
      category: 'Program',
      title: 'Microsoft Learn Student Ambassador',
      organization: 'Microsoft',
      deadline: 'In 12 days',
      upvotes: 74,
      saved: false,
    },
    {
      id: 4,
      category: 'Research',
      title: 'Research Assistant - NLP Lab',
      organization: 'CSE Department',
      deadline: 'Rolling',
      upvotes: 41,
      saved: false,
    },
  ];
}
