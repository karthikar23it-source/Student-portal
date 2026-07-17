export interface RegisterStudentRequest {
  collegeEmail: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterStudentResponse {
  success: boolean;
  message: string;
  data: {
    studentId: string;
  };
}
