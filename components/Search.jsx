import React, { useEffect, useState } from "react";
import { search } from "lib/tmdb";
import Image from "next/image";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Search() {
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState(false);

  useEffect(() => {
    if (query == "") return;

    fetchQueryResults(query);
  }, [query]);

  async function fetchQueryResults(query) {
    const data = await search(query);

    console.log(data);
    setQueryResults(data?.results);
  }

  function restructMediaData(media) {
    if (media.media_type == "person") {
      return {
        img: media.profile_path,
        name: media.name,
      };
    }

    if (media.media_type == "movie") {
      return {
        img: media.poster_path,
        name: media.title,
      };
    }

    if (media.media_type == "tv") {
      return {
        img: media.poster_path,
        name: media.name,
      };
    }
  }

  return (
    <div className="w-full mt-20 mb-3 p-4  md:hidden">
      <form action="" className="relative">
        <input
          className="w-full bg-[#25252e] py-4 px-5 rounded-lg text-sm outline-none border-0 text-slate-50"
          type="text"
          placeholder="Search Media"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute flex justify-center h-[40px] w-[40px] items-center right-2 top-[6px] bg-[#1a1a21] py-2 px-3 rounded-lg shadow-lg text-slate-50"
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

      {query && (
        <div className="absolute z-[100] bg-[#25252e] mt-2 p-2 rounded-lg shadow-lg w-[calc(100%-32px)] max-h-[300px] overflow-y-scroll">
          <div className="grid gap-1">
            {queryResults &&
              queryResults.map((result) => {
                const filtered = restructMediaData(result);

                return (
                  <div
                    className="flex bg-[#1a1a21] p-1 items-center rounded-lg"
                    key={result.id}
                  >
                    <Image
                      className="w-[30px] h-[45px] mr-3 rounded-lg"
                      src={`${TMDB_IMG_BASE_URL}${filtered.img}`}
                      alt=""
                      height={45}
                      width={30}
                      placeholder="blur"
                      blurDataURL="/"
                      objectFit="cover"
                    />
                    <div className="ml-4">
                      <div className="text-slate-50 text-sm">
                        {filtered.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
