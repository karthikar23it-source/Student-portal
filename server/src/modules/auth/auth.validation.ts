import { z } from "zod";

export const registerStudentSchema = z
  .object({
    collegeEmail: z
      .email("Invalid email format")
      .trim()
      .toLowerCase(),

    password: z.string(),

    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    // Check college email domain
    if (!data.collegeEmail.endsWith("@psnacet.edu.in")) {
      ctx.addIssue({
        code: "custom",
        path: ["collegeEmail"],
        message: "INVALID_COLLEGE_EMAIL",
      });
    }

    // Password strength
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(data.password)) {
      ctx.addIssue({
        code: "custom",
        path: ["password"],
        message: "WEAK_PASSWORD",
      });
    }

    // Password confirmation
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "PASSWORD_MISMATCH",
      });
    }
  });
export const verifyOtpSchema = z.object({
  studentId: z.string().trim(),

  otpCode: z
    .string()
    .length(6, "OTP must be 6 digits"),
});

export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;

export type RegisterStudentInput = z.infer<
  typeof registerStudentSchema
>;
export const resendOtpSchema = z.object({
  studentId: z.string().trim(),
});

export type ResendOtpInput = z.infer<
  typeof resendOtpSchema
>;
export const completeProfileSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),

  fullName: z.string().trim().min(1, "Full name is required"),

  rollNumber: z.string().trim().min(1, "Roll number is required"),

  department: z.string().trim().min(1, "Department is required"),

  year: z.string().trim().min(1, "Year is required"),

  section: z.string().trim().min(1, "Section is required"),
});
export const loginStudentSchema = z.object({
  collegeEmail: z
    .string()
    .email("Invalid college email"),

  password: z
    .string()
    .min(1, "Password is required"),
});