import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={
            "https://res.cloudinary.com/deyw9xwwr/image/upload/v1730798424/waunkqzs4rcsxeqf3uft.png"
          }
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
