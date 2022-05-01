import Image from "next/image";
import FadeIn from "react-fade-in";
import Link from "next/link";
import React from 'react'

// utils
import { getGenre } from "util/getGenre";

// components
import { CalendarIcon } from "components/graphics";

// constant
const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

function MediaCard({ mediaType, media }) {
  const [src, setSrc] = React.useState(
    `${TMDB_IMG_BASE_URL}${media.poster_path}`
  );

  return (
    <FadeIn>
      <Link
        href={`/${mediaType == "movies" ? "movies" : "series"}/${media.id}`}
        passHref
      >
        <div
          className="relative cursor-pointer hover:drop-shadow-lg min-w-[150px] w-full h-[350px]"
        >
          <Image
            className="rounded-md shadow-lg z-10 w-full h-[280px] sm:h-[350px]"
            src={media.poster_path == null ? "/placeholder.svg" : src}
            placeholder="blur"
            blurDataURL="/"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute z-20 h-full w-full bg-gradient-to-b from-transparent to-[#1a1a21]/90"></div>

          <div className="absolute bottom-0 w-full p-2 z-30 text-slate-100">
            <h3 className="font-bold mb-2">
              {mediaType === "movies" ? media.title : media.name}
            </h3>
            <div className="flex my-1">
              {media.genre_ids.slice(0, 2).map((genre, key) => {
                return (
                  <div className="mr-1 text-sm text-orange-400" key={key}>
                    {getGenre(genre)}
                    {media.genre_ids.slice(0, 2).length == 2
                      ? key == 1
                        ? ""
                        : ","
                      : ""}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between">
              <div className="flex text-xs items-center">
                <CalendarIcon />
                <span className="ml-1">
                  {" "}
                  {mediaType === "movies"
                    ? media.release_date
                    : media.first_air_date}
                </span>
              </div>
              <div className="text-xs py-1 px-2 bg-purple-800 rounded-md shadow-lg">
                <span className="font-bold">{media.vote_average}</span>/10
              </div>
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default MediaCard;
