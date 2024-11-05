import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Creative Thoughts Agency</h2>
          <p className="text-gray-400 mt-2">
            Inspiring brands with innovative ideas and impactful solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 text-center">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-gray-300 hover:text-white text-xl transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter className="text-gray-300 hover:text-white text-xl transition-colors" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="text-gray-300 hover:text-white text-xl transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-gray-300 hover:text-white text-xl transition-colors" />
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Creative Thoughts Agency. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
