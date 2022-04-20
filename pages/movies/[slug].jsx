import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

import { Page } from "components";
import { getMovie, getMovieVideos, getMovieImages } from "lib/tmdb";

import MovieHero from "components/MovieHero";
import ImagesTrailerWrapper from "components/ImagesTrailerWrapper";

export default function Movie() {
  const router = useRouter();
  const { slug } = router.query;
  const [movieData, setMovieData] = useState(false);
  const [movieVideos, setMovieVideos] = useState(false);
  const [movieImages, setMovieImages] = useState(false);

  const fetchDatas = async (id) => {
    const movieData = await getMovie(id);
    const movieVideos = await getMovieVideos(id);
    const movieImages = await getMovieImages(id);

    setMovieVideos(movieVideos);
    setMovieData(movieData);
    setMovieImages(movieImages);
  };

  useEffect(() => {
    if (!slug) return;

    fetchDatas(slug);
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
          <React.Fragment>
            <MovieHero movieData={movieData} />
            <ImagesTrailerWrapper
              movieImages={movieImages}
              movieVideos={movieVideos}
            />
          </React.Fragment>
        )}
      </div>
    </Page>
  );
}
