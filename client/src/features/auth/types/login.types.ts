export interface LoginRequest {
  collegeEmail: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}
