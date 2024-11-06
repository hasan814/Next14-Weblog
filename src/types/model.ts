import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin: boolean;
}


export interface IPost extends Document {
    title: string;
    desc: string;
    img?: string;
    userId: mongoose.Schema.Types.ObjectId;
    slug: string;
}
