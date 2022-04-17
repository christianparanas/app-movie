import React from "react";

function TabSelector({ onClick, isActive, children }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-md  font-semibold py-3 px-6 rounded-3xl mr-2 md:mr-4 whitespace-nowrap md:text-lg ${
        isActive
          ? "text-slate-100 bg-purple-700 shadow-lg"
          : "text-slate-500 hover:bg-[#25252e]"
      } `}
    >
      {children}
    </div>
  );
}

export default TabSelector;
