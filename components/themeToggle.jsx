import React, { useState } from "react";
import Image from "next/image";

import SunIcon from "./graphics/SunIcon";
import MoonIcon from "./graphics/MoonIcon";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    if (isDarkMode) return setIsDarkMode(false);

    setIsDarkMode(true);
  };

  return (
    <div
      onClick={changeTheme}
      className="flex mx-auto items-center bg-slate-800 w-fit p-2 rounded-lg cursor-pointer"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

export default ThemeToggle;
