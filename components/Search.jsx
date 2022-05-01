import React from "react";

export default function Search() {
  return (
    <div className="w-full mt-20 mb-3 md:hidden">
      <form action="" className="p-4 relative">
        <input
          className="w-full bg-[#25252e] py-4 px-5 rounded-lg text-sm outline-none border-0 text-slate-50"
          type="text"
          placeholder="Search Media"
        />
        <button
          className="absolute flex justify-center h-[40px] w-[40px] items-center right-6 top-[22px] bg-[#1a1a21] py-2 px-3 rounded-lg shadow-lg text-slate-50"
          type="submit"
        >
          <span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}
