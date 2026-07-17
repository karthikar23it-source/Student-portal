import { api } from '../../../lib/api';
import type { RegisterStudentRequest, RegisterStudentResponse } from '../types/auth.types';

export const registerStudent = async (
  data: RegisterStudentRequest
): Promise<RegisterStudentResponse> => {
  const response = await api.post<RegisterStudentResponse>('/auth/register', data);

  return response.data;
};
