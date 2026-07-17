import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  collegeEmail: string;
  password: string;

  studentEmailVerified: boolean;

  otpCode?: string;
  otpExpiresAt?: Date;

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
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model<IStudent>(
  "Student",
  studentSchema
);