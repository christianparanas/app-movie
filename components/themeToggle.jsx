import React, { useState } from "react";
import Image from "next/image";

const moon = "/graphics/moon.svg";
const sun = "/graphics/sun.svg";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    if (isDarkMode) return setIsDarkMode(false);

    setIsDarkMode(true);
  };

  const parseImg = (imgSrc) => {
    return <Image src={imgSrc} width={23} height={23} />;
  };

  return (
    <div
      onClick={changeTheme}
      className="flex mx-auto items-center bg-slate-800 w-fit p-2 rounded-lg cursor-pointer"
    >
      {isDarkMode ? parseImg(sun) : parseImg(moon)}
    </div>
  );
}

export default ThemeToggle;
