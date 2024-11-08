import { model, models, Schema } from "mongoose";
import { IPost } from "@/types/model";


const PostSchema: Schema = new Schema(
    {
        title: { type: String, required: true, trim: true },
        desc: { type: String, required: true },
        img: { type: String },
        userId: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

const Post = models?.Post || model<IPost>("Post", PostSchema);
export default Post
