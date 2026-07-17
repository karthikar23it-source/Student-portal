import { api } from '../../../lib/api';

import type {
  VerifyOtpRequest,
  VerifyOtpResponse,
  ResendOtpRequest,
  ResendOtpResponse,
} from '../types/verifyOtp.types';

export const verifyOtp = async (data: VerifyOtpRequest): Promise<VerifyOtpResponse> => {
  const response = await api.post<VerifyOtpResponse>('/auth/verify-otp', data);

  return response.data;
};

export const resendOtp = async (data: ResendOtpRequest): Promise<ResendOtpResponse> => {
  const response = await api.post<ResendOtpResponse>('/auth/resend-otp', data);

  return response.data;
};
