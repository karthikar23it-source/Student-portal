import axios from 'axios';

import type { PostOpportunityRequest, PostOpportunityResponse } from '../types/opportunity.types';

export const postOpportunity = async (
  data: PostOpportunityRequest
): Promise<PostOpportunityResponse> => {
  const response = await axios.post<PostOpportunityResponse>('/api/opportunities', data);

  return response.data;
};
