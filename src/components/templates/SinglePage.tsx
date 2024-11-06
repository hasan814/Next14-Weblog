import { AiOutlineArrowLeft } from "react-icons/ai";
import { getImportanceTitle } from "@/utils/FunctionHelper";
import { SinglePostPage } from "@/types";
import { Suspense } from "react";

import PostUser from "../modules/PostUser";
import Image from "next/image";
import Link from "next/link";

const SinglePage = async ({ post }: SinglePostPage) => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Back Button */}
      <Link
        href="/blog"
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <AiOutlineArrowLeft className="mr-2 text-xl" />
        <span className="text-sm md:text-base">Back to Blog</span>
      </Link>

      {/* Main Image Section */}
      {post.img && (
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] mb-6">
          <Image
            src={post.img}
            alt="single post"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Post Content Section */}
      <div className="border p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">
          {post.title}
        </h1>

        <div>
          <span className="font-semibold">Published:</span>
          <span> {post.createdAt.toString().slice(0, 16)}</span>
        </div>

        {/* Author and Date Information */}
        <Suspense fallback={<div className="">loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>

        {/* Description Section */}
        <div className="text-gray-300 text-base leading-relaxed">
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
