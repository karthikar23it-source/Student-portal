import { AuthRepository } from "./auth.repository.js";
import {
  hashPassword,
  comparePassword,
} from "../../utils/password.js";
import { generateOtp, getOtpExpiry } from "../../utils/otp.js";
import { sendOtpEmail } from "../../utils/email.js";

export class AuthService {
  private authRepository = new AuthRepository();

  async registerStudent(
    collegeEmail: string,
    password: string
  ) {
    // Check existing email
    const existingStudent =
      await this.authRepository.findStudentByEmail(collegeEmail);

    if (existingStudent) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Generate OTP
    const otpCode = generateOtp();
    const otpExpiresAt = getOtpExpiry();

    // Save student
    const student = await this.authRepository.createStudent({
      collegeEmail,
      password: hashedPassword,
      otpCode,
      otpExpiresAt,
      studentEmailVerified: false,
    });

    // Send OTP
    await sendOtpEmail(collegeEmail, otpCode);

    return {
      studentId: student._id,
      message: "OTP sent to college email",
    };
  }

  async verifyOtp(
    studentId: string,
    otpCode: string
  ) {
    // Find student
    const student = await this.authRepository.findStudentById(studentId);

    if (!student) {
      throw new Error("STUDENT_NOT_FOUND");
    }

    // Check OTP expiry
    if (
      !student.otpExpiresAt ||
      student.otpExpiresAt.getTime() < Date.now()
    ) {
      throw new Error("OTP_EXPIRED");
    }

    // Check OTP match
    if (student.otpCode !== otpCode) {
      throw new Error("OTP_INVALID");
    }

    // Verify email
    await this.authRepository.verifyStudentEmail(studentId);

    return {
      message: "College email verified successfully.",
    };
  }

  async resendOtp(studentId: string) {
    // Find student
    const student = await this.authRepository.findStudentById(studentId);

    if (!student) {
      throw new Error("STUDENT_NOT_FOUND");
    }

    // Prevent resending if email is already verified
    if (student.studentEmailVerified) {
      throw new Error("EMAIL_ALREADY_VERIFIED");
    }

    // Generate new OTP
    const otpCode = generateOtp();
    const otpExpiresAt = getOtpExpiry();

    // Update OTP in database
    await this.authRepository.updateOtp(
      studentId,
      otpCode,
      otpExpiresAt
    );

    // Send new OTP email
    await sendOtpEmail(student.collegeEmail, otpCode);

    return {
      message: "OTP resent",
    };
  }
  async completeProfile(data: {
  studentId: string;
  fullName: string;
  rollNumber: string;
  department: string;
  year: string;
  section: string;
}) {
  // Find student
  const student = await this.authRepository.findStudentById(data.studentId);

  if (!student) {
    throw new Error("STUDENT_NOT_FOUND");
  }

  // Ensure email is verified
  if (!student.studentEmailVerified) {
    throw new Error("EMAIL_NOT_VERIFIED");
  }

  // Update profile
  await this.authRepository.completeProfile(data);

  return {
    success: true,
    message: "Profile completed successfully.",
  };
}
async loginStudent(
  collegeEmail: string,
  password: string
) {
  // Find student
  const student = await this.authRepository.findStudentByEmail(
    collegeEmail
  );

  if (!student) {
    throw new Error("STUDENT_NOT_FOUND");
  }

  // Compare password
  const isPasswordValid = await comparePassword(
    password,
    student.password
  );

  if (!isPasswordValid) {
    throw new Error("INVALID_PASSWORD");
  }

  return {
    success: true,
    message: "Login successful.",
    studentId: student._id,
  };
}
}
