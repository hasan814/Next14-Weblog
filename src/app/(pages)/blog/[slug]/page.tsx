import SinglePage from "@/components/templates/SinglePage";
import { getData } from "@/utils/FetchDataDB";

interface SingleProps {
  params: { slug: string };
}

const Single = async ({ params }: SingleProps) => {
  const { slug } = await params;
  const post = await getData(slug);

  return <SinglePage post={post} />;
};

export default Single;
