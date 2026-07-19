import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  collegeEmail: string;
  password: string;

  studentEmailVerified: boolean;

  otpCode?: string;
  otpExpiresAt?: Date;

  // Profile fields
  fullName?: string;
  rollNumber?: string;
  department?: string;
  year?: string;
  section?: string;

  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema<IStudent>(
  {
    collegeEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    studentEmailVerified: {
      type: Boolean,
      default: false,
    },

    otpCode: {
      type: String,
      default: null,
    },

    otpExpiresAt: {
      type: Date,
      default: null,
    },

    // ==========================
    // Complete Profile Fields
    // ==========================

    fullName: {
      type: String,
      trim: true,
      default: null,
    },

    rollNumber: {
      type: String,
      trim: true,
      default: null,
    },

    department: {
      type: String,
      trim: true,
      default: null,
    },

    year: {
      type: String,
      trim: true,
      default: null,
    },

    section: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model<IStudent>(
  "Student",
  studentSchema
);