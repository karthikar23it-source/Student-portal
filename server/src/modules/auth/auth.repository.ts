import { Student } from "./models/student.model.js";
import type { IStudent } from "./models/student.model.js";
export class AuthRepository {
  /**
   * Find student by college email
   */
  async findStudentByEmail(
    collegeEmail: string
  ): Promise<IStudent | null> {
    return Student.findOne({ collegeEmail });
  }

  /**
   * Create a new student
   */
  async createStudent(
    studentData: Partial<IStudent>
  ): Promise<IStudent> {
    return Student.create(studentData);
  }

  /**
   * Find student by ID
   */
  async findStudentById(
    studentId: string
  ): Promise<IStudent | null> {
    return Student.findById(studentId);
  }

  /**
   * Update OTP details
   */
  async updateOtp(
    studentId: string,
    otpCode: string,
    otpExpiresAt: Date
  ): Promise<IStudent | null> {
    return Student.findByIdAndUpdate(
      studentId,
      {
        otpCode,
        otpExpiresAt,
      },
      {
        new: true,
      }
    );
  }

  /**
   * Verify student email
   */
  async verifyStudentEmail(
    studentId: string
  ): Promise<IStudent | null> {
    return Student.findByIdAndUpdate(
      studentId,
      {
        studentEmailVerified: true,
        otpCode: null,
        otpExpiresAt: null,
      },
      {
        new: true,
      }
    );
  }
}