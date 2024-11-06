import { PostUserProps } from "@/types";
import { getUser } from "@/utils/FetchDataDB";

import Image from "next/image";

const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
      <div className="flex items-center space-x-2">
        {user.img && (
          <Image
            src={user.img}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
        <span className="font-semibold">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
