"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";
import { JSX } from "react";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const linkClass =
    "px-4 font-medium py-2 rounded-full text-gray-900 text-sm transition-all duration-200 cursor-pointer hover:bg-emerald-100";
  const activeLinkClass =
    "bg-linear-to-r from-[#a8e6ce] to-emerald-600 text-white font-semibold shadow-md";

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/articles", label: "Articles" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2 cursor-pointer">
        <span className="font-bold text-xl bg-linear-to-r from-[#a8e6ce] to-emerald-600 bg-clip-text text-transparent">
          &lt;Akinfemi/&gt;
        </span>
      </Link>

      <div className="hidden md:flex md:items-center md:gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${linkClass} ${pathname === link.href ? activeLinkClass : ""}`}
          >
            {link.label}
          </Link>
        ))}

        <div className="ml-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
          >
            {theme === "dark" ? (
              <LuMoon className="h-5 w-5" />
            ) : (
              <LuSun className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
