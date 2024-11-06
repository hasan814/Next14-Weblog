import { getImportanceTitle } from "@/utils/FunctionHelper";
import { PostProps } from "@/types";

import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: PostProps;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col gap-5 mb-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      {/* Image and Date */}
      <div className="flex relative">
        {/* Image Container */}
        {post.img && (
          <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730835931/otkj7mcazmifol1stc5q.jpg"
              alt="blog"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Date */}
        <span className="absolute top-2 right-2 md:right-4 text-sm md:text-base bg-blue-500 text-white px-3 py-1 rounded-md font-semibold transform rotate-90">
          01.01.2024
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-400">
          {getImportanceTitle(post.title)}
        </h1>
        <p className="text-gray-300">{post.desc}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
