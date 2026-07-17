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
}