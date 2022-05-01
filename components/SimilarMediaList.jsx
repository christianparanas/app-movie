import React, { Fragment } from "react";

import { MediaCard } from "components";


export default function SimilarMediaList({ similarMovies }) {

  return (
    <div className="md:w-[1200px] mb-20 rounded-lg mx-auto">
      {similarMovies && (
        <div className="">
          <h2 className="text-3xl font-bold text-slate-200 mb-4">
            Similar Movies
          </h2>
          <div className="relative flex overflow-x-auto pb-4">
            {similarMovies.results.map((movie) => (
              <div className="relative mr-4 min-w-[200px] bg-black" key={movie.id}>
                <MediaCard mediaType="movies" media={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
