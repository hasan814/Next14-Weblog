"use client";

import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/utils/NavLinks";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // ========== Authentication Status ===========
  const session = false;
  const isAdmin = false;

  // ========== PathName ===========
  const path = usePathname();

  // ========== Logout Handler ===========
  const handleLogout = () => {
    // Implement logout functionality
    console.log("Logged out");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg rounded-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image
            src="/blog.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        {NavLinks.map((link) => (
          <Link
            href={link.path}
            key={uuidv4()}
            className={`${
              path === link.path
                ? "text-blue-600 font-semibold"
                : "text-gray-100"
            } hover:text-gray-700 transition-colors`}
          >
            {link.title}
          </Link>
        ))}
        {/* Conditional Admin Link */}
        {isAdmin && (
          <Link
            href="/admin"
            className={`${
              path === "/admin"
                ? "text-blue-600 font-semibold"
                : "text-gray-100"
            } hover:text-gray-900 transition-colors`}
          >
            Admin
          </Link>
        )}
      </nav>

      {/* Authentication Buttons */}
      <div className="flex space-x-4">
        {session ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
