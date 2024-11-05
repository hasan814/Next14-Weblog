import { v4 as uuidv4 } from "uuid";
import { NavLinks } from "@/utils/NavLinks";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg rounded-md">
      <div className="text-2xl font-bold text-gray-800">
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
      <nav className="flex space-x-6">
        {NavLinks.map((link) => (
          <Link
            href={link.path}
            key={uuidv4()}
            className="hover:text-gray-600 transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
