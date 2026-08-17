export interface PostOpportunityRequest {
  title: string;
  organization: string;
  category: 'Internship' | 'Hackathon' | 'Research' | 'Event' | 'Scholarship';
  deadline: string;
  description: string;
}

export interface PostOpportunityResponse {
  success: boolean;
  message: string;
}
