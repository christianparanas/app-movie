import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

import ThemeToggle from "./themeToggle";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 w-full z-50 flex justify-between items-center py-2 px-4 bg-slate-900 text-white shadow-lg ">
        <div className="">MovieMe</div>
        <div className="grid grid-cols-2 gap-2 items-center">
          <ThemeToggle />
          <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
