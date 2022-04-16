import React from "react";

function TabSelector({ onClick, isActive, children }) {

  return (
    <div
      onClick={onClick}
      className={`${
        isActive
          ? "text-slate-400 border-b border-purple-800"
          : "text-slate-500"
      } cursor-pointer pb-1 font-bold`}
    >
      {children}
    </div>
  );
}

export default TabSelector;
