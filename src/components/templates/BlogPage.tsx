import { BlogPageProps } from "@/types";
import { v4 as uuidv4 } from "uuid";

import PostCard from "../modules/PostCard";

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-500 mb-8">
        Blog Posts
      </h1>
      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard post={post} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
