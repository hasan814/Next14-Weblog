import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 md:p-12 min-h-screen items-center">
      {/* Left Section with Image */}
      <div className="flex-1">
        <Image
          src="https://res.cloudinary.com/deyw9xwwr/image/upload/v1730798423/idfhxaqbl2iylzxgxbyl.png"
          alt="contact"
          width={600}
          height={600}
          quality={75}
          unoptimized
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Section with Contact Form */}
      <div className="flex-1 space-y-6 max-w-lg border rounded-md p-3">
        <h2 className="text-2xl font-bold text-gray-500 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Fill out the form below to contact us. We look forward to hearing from
          you!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name and Surname"
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            cols={30}
            rows={5}
            placeholder="Message"
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
