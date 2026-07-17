export interface VerifyOtpRequest {
  studentId: number;
  otpCode: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message?: string;
}

export interface ResendOtpRequest {
  studentId: number;
}

export interface ResendOtpResponse {
  success: boolean;
  message?: string;
}
