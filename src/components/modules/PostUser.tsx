import { PostUserProps } from "@/types";
import Image from "next/image";

const getData = async (userId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getData(userId);
  return (
    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
      <div className="flex items-center space-x-2">
        <Image
          src="https://img.icons8.com/fluency/96/gender-neutral-user--v1.png"
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-semibold">{user.username}</span>
      </div>
      <div>
        <span className="font-semibold">Published:</span>
        <span> 01.01.2024</span>
      </div>
    </div>
  );
};

export default PostUser;
