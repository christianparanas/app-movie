import { useState } from "react";

import { SunIcon, MoonIcon } from "components/graphics";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    if (isDarkMode) return setIsDarkMode(false);

    setIsDarkMode(true);
  };

  return (
    <div
      onClick={changeTheme}
      className="flex mx-auto items-center bg-[#25252e] w-fit p-2 rounded-lg cursor-pointer"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

export default ThemeToggle;
