import Image from "next/image";
import FadeIn from "react-fade-in";

import { getGenre } from "util/getGenre";

import CalendarIcon from "components/graphics/CalendarIcon";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

function MediaCard({ mediaType, media }) {
  return (
    <FadeIn>
      <div
        className="cursor-pointer hover:drop-shadow-lg sm:h-72"
        style={{ position: "relative", width: "100%", height: "350px" }}
      >
        <Image
          className="rounded-md shadow-lg z-10 min-h-[350px]"
          src={`${TMDB_IMG_BASE_URL}${media.poster_path}`}
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
    </FadeIn>
  );
}

export default MediaCard;
