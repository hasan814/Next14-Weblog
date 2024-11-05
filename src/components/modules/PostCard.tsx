import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-8 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      {/* Image and Date */}
      <div className="flex relative">
        {/* Image Container */}
        <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730835931/otkj7mcazmifol1stc5q.jpg"
            alt="blog"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Date */}
        <span className="absolute top-2 right-2 md:right-4 text-sm md:text-base bg-blue-500 text-white px-3 py-1 rounded-md font-semibold transform rotate-90">
          01.01.2024
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-400">Title</h1>
        <p className="text-gray-300">
          Description of the post goes here. This should be a brief summary that
          entices readers to learn more.
        </p>
        <Link
          href="/blog/post"
          className="text-blue-600 font-semibold hover:underline"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
