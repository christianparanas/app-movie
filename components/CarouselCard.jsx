import React from "react";
const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import { getGenre } from "util/getGenre";

export default function CarouselCard({ data }) {
  return (
    <div className="relative lg:min-h-screen">
      <img
        src={`${TMDB_IMG_BASE_URL}${data.backdrop_path}`}
        alt={`${data.title} Image`}
        className="w-full lg:min-h-screen lg:h-screen object-cover"
      />
      <div className="absolute top-0 z-20 h-full w-full bg-gradient-to-b from-[#1a1a21]/20 to-transparent"></div>

      <div className="absolute z-50 md:left-10 md:top-[250px] p-4 rounded-md text-slate-100 bg-slate-900/40 backdrop-blur-lg w-[500px]">
        <h2 className="text-3xl font-bold">{data.original_title}</h2>

        <div className="">
          <div className="flex items-center">
            <span>Genre: </span>
            <span className="flex">
              {data.genre_ids.slice(0, 3).map((genre, key) => {
                return (
                  <div className="mr-1 text-sm text-orange-400" key={key}>
                    {getGenre(genre)}
                    {data.genre_ids.slice(0, 3).length == 3
                      ? key == 2
                        ? ""
                        : ","
                      : ""}
                  </div>
                );
              })}
            </span>
          </div>
          <div className="">
            <span>Rating: </span>
            <span>{data.vote_average}</span>
          </div>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
