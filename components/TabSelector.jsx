import React from "react";

function TabSelector({ onClick, isActive, children }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-lg font-semibold py-3 px-7 rounded-3xl mr-4 whitespace-nowrap ${
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
