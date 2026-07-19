import type { Request, Response } from "express";
import {
  registerStudentSchema,
  verifyOtpSchema,
  resendOtpSchema,
  completeProfileSchema,
  loginStudentSchema,
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
      console.error("========== REGISTER ERROR ==========");
      console.error(error);
      console.error("====================================");

      if (error.message === "EMAIL_ALREADY_REGISTERED") {
        return res.status(409).json({
          error: "EMAIL_ALREADY_REGISTERED",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
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

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("========== VERIFY OTP ERROR ==========");
      console.error(error);
      console.error("======================================");

      if (error.message === "STUDENT_NOT_FOUND") {
        return res.status(404).json({
          error: "STUDENT_NOT_FOUND",
        });
      }

      if (error.message === "OTP_EXPIRED") {
        return res.status(400).json({
          error: "OTP_EXPIRED",
        });
      }

      if (error.message === "OTP_INVALID") {
        return res.status(400).json({
          error: "OTP_INVALID",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }

  async resendOtp(req: Request, res: Response) {
    try {
      // Validate request body
      const data = resendOtpSchema.parse(req.body);

      // Call service
      const result = await authService.resendOtp(data.studentId);

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("========== RESEND OTP ERROR ==========");
      console.error(error);
      console.error("======================================");

      if (error.message === "STUDENT_NOT_FOUND") {
        return res.status(404).json({
          error: "STUDENT_NOT_FOUND",
        });
      }

      if (error.message === "EMAIL_ALREADY_VERIFIED") {
        return res.status(400).json({
          error: "EMAIL_ALREADY_VERIFIED",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }

  async completeProfile(req: Request, res: Response) {
    try {
      // Validate request body
      const data = completeProfileSchema.parse(req.body);

      // Call service
      const result = await authService.completeProfile(data);

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("======= COMPLETE PROFILE ERROR =======");
      console.error(error);
      console.error("======================================");

      if (error.message === "STUDENT_NOT_FOUND") {
        return res.status(404).json({
          error: "STUDENT_NOT_FOUND",
        });
      }

      if (error.message === "EMAIL_NOT_VERIFIED") {
        return res.status(400).json({
          error: "EMAIL_NOT_VERIFIED",
        });
      }

      return res.status(500).json({
        success: false,
        error: error.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      });
    }
  }
  async loginStudent(req: Request, res: Response) {
  try {
    // Validate request body
    const data = loginStudentSchema.parse(req.body);

    // Call service
    const result = await authService.loginStudent(
      data.collegeEmail,
      data.password
    );

    return res.status(200).json(result);
  } catch (error: any) {
    console.error("========== LOGIN ERROR ==========");
    console.error(error);
    console.error("=================================");

    if (error.message === "STUDENT_NOT_FOUND") {
      return res.status(404).json({
        error: "STUDENT_NOT_FOUND",
      });
    }

    if (error.message === "INVALID_PASSWORD") {
      return res.status(401).json({
        error: "INVALID_PASSWORD",
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message,
      stack:
        process.env.NODE_ENV === "development"
          ? error.stack
          : undefined,
    });
  }
}
}