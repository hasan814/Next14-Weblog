import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 md:p-12 min-h-screen items-center">
      <div className="flex-1 space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold md:text-5xl">
          Creative Thoughts Agency
        </h1>
        <p className="leading-relaxed text-lg">
          Creative Thoughts Agency is a dynamic creative agency that specializes
          in providing innovative solutions in branding, marketing, design, and
          digital strategy. Our team combines artistry with strategy to help
          businesses articulate their vision and connect with their audience.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
            Learn More
          </button>
          <button className="px-6 py-3 bg-gray-300 font-semibold rounded-md hover:bg-gray-400 transition duration-200">
            Contact
          </button>
        </div>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730798422/mowe5igcl76fs5jko4b0.png"
            alt="brand"
            width={500}
            height={500}
            className="rounded-lg filter grayscale transition duration-300"
          />
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730798472/ahz6f0tg4q0ckutia0hk.gif"
          alt="agency illustration"
          width={600}
          height={600}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
