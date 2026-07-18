export type Year = '1st' | '2nd' | '3rd' | '4th';

export interface CompleteProfileFormData {
  fullName: string;
  rollNumber: string;
  department: string;
  year: Year;
  section: string;
}

export interface CompleteProfileRequest extends CompleteProfileFormData {
  studentId: string;
}

export interface CompleteProfileResponse {
  success: boolean;
  message: string;
}
