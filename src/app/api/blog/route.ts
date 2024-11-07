import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/connectDB";

import Post from "@/model/PostModel";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectDB();
        const posts = await Post.find();
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Failed to fetch posts" }, { status: 500 });
    }
};
