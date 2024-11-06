import { getDatas } from "@/utils/FetchDataDB";

import BlogPage from "@/components/templates/BlogPage";

const Blog = async () => {
  // =========== Fetch Data ===============
  const posts = await getDatas();

  // =========== Rendering ===============
  return <BlogPage posts={posts} />;
};

export default Blog;
