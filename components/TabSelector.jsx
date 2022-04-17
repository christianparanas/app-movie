import React from "react";

function TabSelector({ onClick, isActive, children }) {

  return (
    <div
      onClick={onClick}
      className={`${
        isActive
          ? "text-slate-100 bg-purple-700 shadow-lg"
          : "text-slate-500 hover:bg-slate-800"
      } cursor-pointer py-2 px-4 rounded-md font-bold mr-4 whitespace-nowrap`}
    >
      {children}
    </div>
  );
}

export default TabSelector;
