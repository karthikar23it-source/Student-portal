import { api } from '../../../lib/api';
import type { LoginRequest, LoginResponse } from '../types/login.types';

export const loginStudent = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', data);

  return response.data;
};
