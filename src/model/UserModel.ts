import { Schema, model, models } from "mongoose";
import { IUser } from "@/types/model";



const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        password: { type: String, required: true },
        img: { type: String, default: "https://img.icons8.com/color/96/gender-neutral-user.png" },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const User = models.User || model<IUser>("User", UserSchema);
export default User
