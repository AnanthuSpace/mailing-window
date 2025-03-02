import mongoose, { Schema } from "mongoose";
import { IEmail } from "../types/types";

const EmailSchema = new Schema<IEmail>(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true},
    subject: { type: String, required: true },
    preview: { type: String, required: true },
    time: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IEmail>("Email", EmailSchema);
