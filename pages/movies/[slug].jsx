import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import { Page, MovieHero, ImagesTrailerWrapper, PersonCard } from "components";
import {
  getMovie,
  getMovieVideos,
  getMovieImages,
  getMovieCredits,
} from "lib/tmdb";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;
  const [movieData, setMovieData] = useState(false);
  const [movieVideos, setMovieVideos] = useState(false);
  const [movieImages, setMovieImages] = useState(false);
  const [movieCredits, setMovieCredits] = useState(false);

  const fetchDatas = async (id) => {
    const movieData = await getMovie(id);
    const movieVideos = await getMovieVideos(id);
    const movieImages = await getMovieImages(id);
    const movieCredits = await getMovieCredits(id);

    setMovieVideos(movieVideos);
    setMovieData(movieData);
    setMovieImages(movieImages);
    setMovieCredits(movieCredits);
  };

  useEffect(() => {
    if (!slug) return;

    fetchDatas(slug);
  }, [slug]);

  if (movieCredits) console.log(movieCredits);

  return (
    <Page>
      <div className="relative">
        <div className="absolute top-[-40px] md:top-[-120px]">
          <img
            className="md:w-screen"
            src={`${TMDB_IMG_BASE_URL}${movieData.backdrop_path}`}
            alt=""
          />
          <div className="absolute z-20 top-0 h-full w-full bg-gradient-to-b from-transparent to-[#1a1a21]/[100%]"></div>
        </div>

        {movieData && (
          <React.Fragment>
            <MovieHero movieData={movieData} />

            <div className="p-4">
              <ImagesTrailerWrapper
                movieImages={movieImages}
                movieVideos={movieVideos}
              />

              <div className="md:w-[1200px] mb-20 rounded-lg mx-auto grid grid-cols-1 gap-20">
                {movieCredits && (
                  <Fragment>
                    <div className="">
                      <h2 className="text-3xl font-bold text-slate-200 mb-4">
                        Cast
                      </h2>
                      <div className="flex overflow-x-scroll pb-4">
                        {movieCredits.cast.map((person, key) => (
                          <PersonCard
                            key={key}
                            personType="cast"
                            person={person}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="">
                      <h2 className="text-3xl font-bold text-slate-200 mb-4">
                        Crew
                      </h2>
                      <div className="flex overflow-x-scroll pb-4">
                        {movieCredits.crew.map((person, key) => (
                          <PersonCard
                            key={key}
                            personType="crew"
                            person={person}
                          />
                        ))}
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
}
