import { LuSun } from "react-icons/lu";
import { JSX } from "react";
const Navbar = (): JSX.Element => {
  const linkClass = "px-4 font-medium py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:bg-emerald-100"  
  const activeLinkClass = "bg-linear-to-r from-[#a8e6ce] to-emerald-600 text-white font-semibold shadow-md"

  return (
    <nav className="container flex h-16 items-center justify-between">
      <a href="/" className="flex  items-center space-x-2 cursor-pointer">
        <span className="font-bold text-xl bg-linear-to-r from-[#a8e6ce] to-emerald-600 bg-clip-text text-transparent">
          &lt;Akinfemi/&gt;
        </span>
      </a>

      <div className="hidden md:flex md:items-center md:gap-2">
        <a className={linkClass} href="/">Home</a>

        <a className={linkClass} href="/projects">Project</a>

        <a className={linkClass} href="/skills">Skills</a>

        <a className={linkClass} href="/articles">Articles</a>

        <a className={linkClass} href="/contact">Contact</a>
        <div className="ml-2">
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer">
            <LuSun
              className="text-slate-900 h-5 w-5 transition-all duration-300 pointer-events-none rotate-90 "
              size={20}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
