import { PostUserProps } from "@/types";
import { getUser } from "@/lib/data";

import Image from "next/image";

const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getUser(userId);
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
        <span className="font-semibold">{user.name}</span>
      </div>
      <div>
        <span className="font-semibold">Published:</span>
        <span> 01.01.2024</span>
      </div>
    </div>
  );
};

export default PostUser;
