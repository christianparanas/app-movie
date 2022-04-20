import React from "react";
const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import { getGenre } from "util/getGenre";

export default function CarouselCard({ data }) {

  return (
    <div className="relative h-96 lg:min-h-screen overflow-hidden">
      <img
        src={`${TMDB_IMG_BASE_URL}${data.backdrop_path}`}
        alt={`${data.media_type == "movie" ? data.title : data.name } Image`}
        className="w-full h-96 lg:min-h-screen lg:h-screen object-cover"
      />
      <div className="absolute top-0 z-20 h-full w-full bg-gradient-to-b from-[#1a1a21]/20 to-transparent"></div>

      <div className="overflow-hidden absolute p-4 w-[calc(100%-32px)] h-fit z-50 bottom-5 left-4 bg-slate-900/30 backdrop-blur-xs md:left-10 md:top-[250px] md:p-6 rounded-lg text-slate-100 md:bg-slate-900/40 md:backdrop-blur-lg md:w-[500px] shadow-xl">
        <h2 className="text-lg md:text-3xl font-bold mb-2">{data.media_type == "movie" ? data.title : data.name}</h2>

        <div className="grid gap-2 text-xs md:text-lg">
          <div className="flex items-center">
            <span className="mr-2 text-slate-300">Genre: </span>
            <span className="flex">
              {data.genre_ids.slice(0, 3).map((genre, key) => {
                return (
                  <div className="mr-1 text-xs md:text-sm text-orange-400" key={key}>
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
            <span className="text-slate-300 mr-2">Rating:</span>
            <span className="text-orange-400">{data.vote_average}</span>
          </div>
          <p className="text-slate-300">{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
