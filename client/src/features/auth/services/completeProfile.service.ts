import { api } from '../../../lib/api';
import type {
  CompleteProfileRequest,
  CompleteProfileResponse,
} from '../types/completeProfile.types';

export const completeProfile = async (
  data: CompleteProfileRequest
): Promise<CompleteProfileResponse> => {
  const response = await api.post<CompleteProfileResponse>('/auth/complete-profile', data);

  return response.data;
};
