"use client";

import { logoutHandler } from "@/utils/Action";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLinks } from "@/utils/NavLinks";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  // ========== Session ===========
  const { data } = useSession();
  const isAdmin = true;

  // ========== PathName ===========
  const path = usePathname();

  // ========== Menu State ===========
  const [menuOpen, setMenuOpen] = useState(false);

  // ========== Toggle Menu ===========
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ========== Logout Handler ===========
  const handleLogout = () => {
    console.log("Logged out");
    setMenuOpen(false);
  };

  // ========== Rendering ===========
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {NavLinks.map((link) => (
          <Link
            href={link.path}
            key={uuidv4()}
            className={`hover:text-gray-600 transition-colors ${
              path === link.path
                ? "text-blue-600 font-semibold"
                : "text-gray-200"
            }`}
          >
            {link.title}
          </Link>
        ))}
        {data && isAdmin && (
          <Link
            href="/admin"
            className="text-gray-200 hover:text-gray-600 transition-colors"
          >
            Admin Panel
          </Link>
        )}
      </nav>

      {/* Authentication Buttons */}
      <div className="hidden md:flex space-x-4">
        {data ? (
          <form action={logoutHandler}>
            <button
              onClick={handleLogout}
              className="text-blue-600 bg-gray-200 py-1 px-6 hover:bg-transparent hover:text-gray-200 rounded-lg transition"
            >
              Logout
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-900 rounded-md shadow-md p-4 md:hidden transition-transform transform">
          <nav className="flex flex-col items-center space-y-4">
            {NavLinks.map((link) => (
              <Link
                href={link.path}
                key={uuidv4()}
                className={`hover:text-gray-600 transition-colors ${
                  path === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {data && isAdmin && (
              <Link
                href="/admin"
                className="text-gray-200 hover:text-gray-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Admin Panel
              </Link>
            )}
            {data ? (
              <button
                onClick={handleLogout}
                className="text-blue-600 bg-gray-200 py-1 px-6 hover:bg-transparent hover:text-gray-200 rounded-lg transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
