import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import { Page } from "components";
import { getMovie } from "lib/tmdb";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;
  const [movieData, setMovieData] = useState(false);

  const fetchMovieData = async (id) => {
    const data = await getMovie(id);
    console.log(data);

    setMovieData(data);
  };

  useEffect(() => {
    if (!slug) return;

    fetchMovieData(slug);
  }, [slug]);

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
          <div className="text-white relative top-[100px] md:top-[180px] mx-auto min-h-fit md:mt-20 md:w-[1200px]">
            <div className="p-4 mt-10">
              <div className="grid md:grid-cols-[350px_1fr] gap-[40px] md:gap-[80px]">
                <img
                  className="z-[100] min-h-[300px] w-[200px] mx-auto md:w-[350px] shadow-lg rounded-lg"
                  src={`${TMDB_IMG_BASE_URL}${movieData.poster_path}`}
                  alt=""
                />
                <div className="z-[100] pt-7 w-full">
                  <h2 className="text-3xl md:text-4xl font-extrabold">
                    {movieData.title}
                  </h2>

                  <div className="mb-4 text-slate-300">
                    - {movieData.tagline}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Genre:</span>
                      <p className="flex text-slate-300">
                        {movieData &&
                          movieData.genres.map((genre, key) => {
                            return (
                              <div key={key} className="mr-1">
                                {genre.name}
                                {movieData.genres.length ==
                                movieData.genres.length
                                  ? key == movieData.genres.length - 1
                                    ? ""
                                    : ","
                                  : ""}
                              </div>
                            );
                          })}
                      </p>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Release date:</span>
                      <span className="text-slate-300">
                        {movieData.release_date}
                      </span>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Country:</span>
                      <p className="flex text-slate-300">
                        {movieData &&
                          movieData.production_countries.map((country, key) => {
                            return (
                              <div key={key} className="mr-1">
                                {country.name}
                                {movieData.production_countries.length ==
                                movieData.production_countries.length
                                  ? key ==
                                    movieData.production_countries.length - 1
                                    ? ""
                                    : ","
                                  : ""}
                              </div>
                            );
                          })}
                      </p>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Companies:</span>
                      <p className="flex text-slate-300">
                        {movieData &&
                          movieData.production_companies
                            .slice(0, 2)
                            .map((company, key) => {
                              return (
                                <div key={key} className="mr-1">
                                  {company.name}
                                  {movieData.production_companies.slice(0, 2)
                                    .length ==
                                  movieData.production_companies.slice(0, 2)
                                    .length
                                    ? key ==
                                      movieData.production_companies.slice(0, 2)
                                        .length -
                                        1
                                      ? ""
                                      : ","
                                    : ""}
                                </div>
                              );
                            })}
                      </p>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Language:</span>
                      <p className="flex text-slate-300">
                        {movieData &&
                          movieData.spoken_languages.map((language, key) => {
                            return (
                              <div key={key} className="mr-1">
                                {language.english_name}
                                {movieData.spoken_languages.length ==
                                movieData.spoken_languages.length
                                  ? key == movieData.spoken_languages.length - 1
                                    ? ""
                                    : ","
                                  : ""}
                              </div>
                            );
                          })}
                      </p>
                    </div>
                    <div className="flex items-center text-sm md:text-lg">
                      <span className="font-semibold mr-2">Status:</span>
                      <p className="flex text-slate-300">{movieData.status}</p>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-sm md:text-lg font-semibold mb-2">
                      Overview
                    </div>
                    <p className="text-slate-300">{movieData.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
}
