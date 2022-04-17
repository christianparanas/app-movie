import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

import ThemeToggle from "./themeToggle";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 w-full z-50 flex justify-between items-center py-2 px-4 bg-slate-900 text-white border-b border-gray-800/75">
      <h1 className="text-2xl font-extrabold sm:text-2xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
          Media <span className="text-slate-400">Lib</span>
        </span>
      </h1>
        <div className="grid grid-cols-2 gap-2 items-center">
          <ThemeToggle />
          <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
