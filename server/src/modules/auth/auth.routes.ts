import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();
const authController = new AuthController();

router.post(
  "/register",
  authController.registerStudent.bind(authController)
);

router.post(
  "/verify-otp",
  authController.verifyOtp.bind(authController)
);

router.post(
  "/resend-otp",
  authController.resendOtp.bind(authController)
);

router.post(
  "/complete-profile",
  authController.completeProfile.bind(authController)
);
router.post(
  "/login",
  authController.loginStudent.bind(authController)
);
export default router;