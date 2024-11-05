import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const SinglePage = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Back Button */}
      <Link
        href="/blog"
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <AiOutlineArrowLeft className="mr-2 text-xl" />
        <span className="text-sm md:text-base">Back to Blog</span>
      </Link>

      {/* Main Image Section */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] mb-6">
        <Image
          src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730835931/otkj7mcazmifol1stc5q.jpg"
          alt="single post"
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Post Content Section */}
      <div className="border p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">
          Post Title
        </h1>

        {/* Author and Date Information */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <Image
              src="https://img.icons8.com/fluency/96/gender-neutral-user--v1.png"
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-semibold">Terry Jefferson</span>
          </div>
          <div>
            <span className="font-semibold">Published:</span>
            <span>01.01.2024</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-gray-300 text-base leading-relaxed">
          <p>
            Description of the post goes here. It provides insight and details
            about the blog topic, engaging the reader with relevant information
            and context.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
