import { unstable_noStore as noStore } from 'next/cache'
import { connectDB } from "@/lib/connectDB";

import Post from "@/model/PostModel";
import User from "@/model/UserModel";


// =========== Fetch all posts ============
export const getDatas = async () => {
    try {
        connectDB()
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Could not fetch posts");
    }
};

// ============= Fetch a single post by ID =========
export const getData = async (slug: string) => {
    try {
        connectDB()
        const post = await Post.findOne({ slug });
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error("Could not fetch post");
    }
};

// ========== Fetch a single user by ID ============
export const getUser = async (userId: string) => {
    noStore()
    try {
        connectDB()
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Could not fetch user");
    }
};

// ========== Fetch all Users ============
export const getUsers = async () => {
    try {
        connectDB()
        const users = await User.find();
        if (!users) {
            throw new Error("Users not found");
        }
        return users;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Could not fetch user");
    }
};
