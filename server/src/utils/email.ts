import nodemailer from "nodemailer";
import { env } from "../config/env.js";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD,
  },
});

export const sendOtpEmail = async (
  collegeEmail: string,
  otpCode: string
): Promise<void> => {

  await transporter.sendMail({
    from: `"CampusConnect" <${env.EMAIL_USER}>`,
    to: collegeEmail,
    subject: "CampusConnect Email Verification OTP",
    html: `
      <h2>CampusConnect</h2>
      <p>Your OTP is:</p>
      <h1>${otpCode}</h1>
      <p>This OTP is valid for 10 minutes.</p>
    `,
  });
};