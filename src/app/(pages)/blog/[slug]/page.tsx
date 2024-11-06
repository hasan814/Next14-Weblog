import SinglePage from "@/components/templates/SinglePage";

interface SingleProps {
  params: { slug: string };
}

const getData = async (slug: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

const Single = async ({ params }: SingleProps) => {
  const { slug } = await params;
  const post = await getData(slug);

  return <SinglePage post={post} />;
};

export default Single;
