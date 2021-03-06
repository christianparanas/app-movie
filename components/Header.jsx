import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";

import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = () => {
    if (window.pageYOffset > 240) return setIsScrolling(true);

    setIsScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 w-full z-[101] flex justify-between items-center py-2 px-4  text-white md:py-5 md:px-10 ${
          isScrolling
            ? "bg-[#1a1a21] border-b border-slate-800"
            : "bg-gradient-to-b from-[#1a1a21] to-trasnparent"
        }`}
      >
        <Link href="/">
          <h1 className="text-2xl font-extrabold sm:text-2xl">
            <span className="text-[#7B7B8F] cursor-pointer">TMDB</span>
          </h1>
        </Link>

        <div className="grid grid-cols-2 gap-2 items-center lg:hidden">
          <ThemeToggle />
          <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
        </div>

        <div className="hidden lg:flex font-extrabold text-slate-300 items-center">
          <div className="mr-4 cursor-pointer hover:text-slate-100">
            TOP TV SERIES
          </div>
          <div className="mr-4 cursor-pointer hover:text-slate-100">
            TOP MOVIES
          </div>
          <div className="mr-4 cursor-pointer hover:text-slate-100">
            UPCOMING
          </div>
          <div className="mr-4 cursor-pointer hover:text-slate-100">ANIME</div>
          <div className="cursor-pointer hover:text-slate-100">SEARCH</div>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/login" passHref>
            <a className="mr-4 text-lg font-semibold hover:text-slate-400">
              Login
            </a>
          </Link>
          <Link href="/signup" passHref>
            <a className="text-lg font-semibold text-slate-100 py-3 px-7 rounded-3xl bg-[#25252e] hover:bg-purple-800 hover:text-slate-200">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
