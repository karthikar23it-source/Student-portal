export interface RegisterStudentRequest {
  collegeEmail: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterStudentResponse {
  studentId: string;
  message: string;
}
export interface VerifyOtpRequest {
  studentId: string;
  otpCode: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message?: string;
}

export interface ResendOtpRequest {
  studentId: string;
}

export interface ResendOtpResponse {
  success: boolean;
  message?: string;
}