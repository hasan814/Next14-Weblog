import BlogPage from "@/components/templates/BlogPage";
import { PostProps } from "@/types";

const getData = async (): Promise<PostProps[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

const Blog = async () => {
  // =========== Fetch Data ===============
  const posts = await getData();

  // =========== Rendering ===============
  return <BlogPage posts={posts} />;
};

export default Blog;
