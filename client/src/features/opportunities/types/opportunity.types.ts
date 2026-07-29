export interface Opportunity {
  id: number;
  category: string;
  title: string;
  organization: string;
  deadline: string;
  upvotes: number;
  saved: boolean;
}

export interface PostOpportunityRequest {
  title: string;
  organization: string;
  category: string;
  deadline: string;
  description: string;
}

export interface PostOpportunityResponse {
  success: boolean;
  message: string;
}
