import BlogPage from "@/components/templates/BlogPage";
import { getDatas } from "@/utils/FetchData";

const Blog = async () => {
  // =========== Fetch Data ===============
  const posts = await getDatas();

  // =========== Rendering ===============
  return <BlogPage posts={posts} />;
};

export default Blog;
