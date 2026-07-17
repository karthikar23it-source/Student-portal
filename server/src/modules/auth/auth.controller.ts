import type { Request, Response } from "express";
import { registerStudentSchema } from "./auth.validation.js";
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
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  }
}