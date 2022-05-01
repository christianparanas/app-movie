import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import {
  Page,
  MovieHero,
  ImagesTrailerWrapper,
  CreditsList,
  SimilarMediaList,
} from "components";

import {
  getMovie,
  getMovieVideos,
  getMovieImages,
  getMovieCredits,
  getSimilarMovies,
} from "lib/tmdb";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;
  const [movieData, setMovieData] = useState(false);
  const [movieVideos, setMovieVideos] = useState(false);
  const [movieImages, setMovieImages] = useState(false);
  const [movieCredits, setMovieCredits] = useState(false);
  const [similarMovies, setSimilarMovies] = useState(false);

  const fetchDatas = async (id) => {
    const movieData = await getMovie(id);
    const movieVideos = await getMovieVideos(id);
    const movieImages = await getMovieImages(id);
    const movieCredits = await getMovieCredits(id);
    const similarMovies = await getSimilarMovies(id);

    setMovieData(movieData);
    setMovieVideos(movieVideos);
    setMovieImages(movieImages);
    setMovieCredits(movieCredits);
    setSimilarMovies(similarMovies);
  };

  useEffect(() => {
    if (!slug) return;

    fetchDatas(slug);
  }, [router.query.slug]);

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

              <CreditsList movieCredits={movieCredits} />
              <SimilarMediaList similarMovies={similarMovies} />
            </div>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
}
