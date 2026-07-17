import { AuthRepository } from "./auth.repository.js";
import { hashPassword } from "../../utils/password.js";
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
}