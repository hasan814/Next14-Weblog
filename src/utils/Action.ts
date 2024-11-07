'use server'

import { revalidatePath } from "next/cache"
import { connectDB } from "@/lib/connectDB"
import { PostData } from "@/types/server"

import Post from "@/model/PostModel"

// ============ Added Post ================
export const addPost = async (formData: FormData): Promise<{ error?: string }> => {
    const { title, desc, slug, userId } = Object.fromEntries(formData) as unknown as PostData

    try {
        await connectDB()
        const newPost = new Post({ title, desc, slug, userId })
        await newPost.save()
        console.log('saved to DB')
        revalidatePath('/blog')
        return {}
    } catch (err) {
        console.error(err)
        return { error: "Something went wrong!" }
    }
}

// ============ Delete Post ================
export const deletePost = async (formData: FormData): Promise<{ error?: string; success?: boolean }> => {
    const { id } = Object.fromEntries(formData) as unknown as PostData
    if (!id) return { error: "Post ID is required!" }

    try {
        await connectDB()
        const deletePost = await Post.findByIdAndDelete(id)
        if (!deletePost) return { error: "Post not Found!" }
        console.log('Post deleted from DB')
        revalidatePath('/blog')
        return { success: true }
    } catch (err) {
        console.error(err)
        return { error: "Something went wrong!" }
    }
}

