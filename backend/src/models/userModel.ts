import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/types";

const UserSchema = new Schema<IUser>(
    {
        userId: { type: String, require: true},
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
