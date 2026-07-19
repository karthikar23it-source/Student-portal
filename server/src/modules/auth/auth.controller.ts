import type { Request, Response } from "express";
import {
  registerStudentSchema,
  verifyOtpSchema,
} from "./auth.validation.js";
import { AuthService } from "./auth.service.js";

const authService = new AuthService();

export class AuthController {
  async registerStudent(req: Request, res: Response) {
    try {
      // Validate request body
      const data = registerStudentSchema.parse(req.body);

      // Call service
      const result = await authService.registerStudent(
        data.collegeEmail,
        data.password
      );

      // Success response
      return res.status(201).json(result);
    } catch (error: any) {
      // Print the actual error in terminal
      console.error("========== REGISTER ERROR ==========");
      console.error(error);
      console.error("====================================");

      // Email already exists
      if (error.message === "EMAIL_ALREADY_REGISTERED") {
        return res.status(409).json({
          error: "EMAIL_ALREADY_REGISTERED",
        });
      }

      // Return the actual error instead of BAD_REQUEST
      return res.status(500).json({
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development"
          ? error.stack
          : undefined,
      });
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      // Validate request body
      const data = verifyOtpSchema.parse(req.body);

      // Call service
      const result = await authService.verifyOtp(
        data.studentId,
        data.otpCode
      );

      // Success response
      return res.status(200).json(result);
    } catch (error: any) {
      // Print the actual error in terminal
      console.error("========== VERIFY OTP ERROR ==========");
      console.error(error);
      console.error("======================================");

      // Student not found
      if (error.message === "STUDENT_NOT_FOUND") {
        return res.status(404).json({
          error: "STUDENT_NOT_FOUND",
        });
      }

      // OTP expired
      if (error.message === "OTP_EXPIRED") {
        return res.status(400).json({
          error: "OTP_EXPIRED",
        });
      }

      // OTP invalid
      if (error.message === "OTP_INVALID") {
        return res.status(400).json({
          error: "OTP_INVALID",
        });
      }

      // Unexpected error
      return res.status(500).json({
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development"
          ? error.stack
          : undefined,
      });
    }
  }
}