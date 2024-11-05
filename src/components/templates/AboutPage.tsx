import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 md:p-12 min-h-screen items-center">
      <div className="flex-1 space-y-6 max-w-lg">
        <h2 className="text-blue-500 font-bold mb-3">About Agency</h2>
        <h1 className="text-3xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl text-justify py-4">
          We create digital ideas that are bigger, bolder, braver, and better.We
          believe in good ideas flexibility and precission we&apos;re
          world&apos;s Our Special Tean best consulting & finance solution
          provider. Wide range of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-blue-400 font-serif font-semibold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-blue-400 font-serif font-semibold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-blue-400 font-serif font-semibold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={
            "https://res.cloudinary.com/deyw9xwwr/image/upload/v1730798424/waunkqzs4rcsxeqf3uft.png"
          }
          alt="about"
          width={600}
          height={600}
          quality={75}
          unoptimized
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AboutPage;
