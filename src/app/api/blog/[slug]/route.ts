import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/connectDB";

import Post from "@/model/PostModel";

interface Params {
    params: { slug?: string };
}

// =============== Get =================
export const GET = async (req: NextRequest, { params }: Params): Promise<NextResponse> => {
    const { slug } = params;

    try {
        await connectDB();

        if (slug) {
            const post = await Post.findOne({ slug });
            if (!post) {
                return NextResponse.json({ message: "Post not found" }, { status: 404 });
            }
            return NextResponse.json(post, { status: 200 });
        } else {
            const posts = await Post.find();
            return NextResponse.json(posts, { status: 200 });
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Failed to fetch posts" }, { status: 500 });
    }
};

// =============== DELETE =================
export const DELETE = async (req: NextRequest, { params }: Params): Promise<NextResponse> => {
    const { slug } = params;

    try {
        await connectDB();

        if (slug) {
            await Post.deleteOne({ slug });
            return NextResponse.json({ status: 200 });
        } else {
            await Post.find();
            return NextResponse.json({ status: 200 });
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Failed to fetch posts" }, { status: 500 });
    }
};
