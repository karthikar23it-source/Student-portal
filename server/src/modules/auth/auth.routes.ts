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

export default router;