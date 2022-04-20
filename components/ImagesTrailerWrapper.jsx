import React from "react";
import ReactPlayer from "react-player";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function ImagesTrailerWrapper({ movieImages, movieVideos }) {
  return (
    <div className="grid px-4 grid-cols-1 md:grid-cols-2 gap-20 h-[500px] top-0 mt-96 mx-auto md:w-[1200px] mb-20">
      <div className="">
        <h2 className="text-slate-100 text-xl font-bold mb-4">Images</h2>
        <Slider {...settings}>
          {movieImages &&
            movieImages.backdrops
              .slice(0, 8)
              .map((backdrop, key) => (
                <img
                  className="h-[360px]"
                  src={`${TMDB_IMG_BASE_URL}${backdrop.file_path}`}
                  key={key}
                  alt=""
                />
              ))}
        </Slider>
      </div>
      <div className="videos">
        <h3 className="text-slate-100 text-xl font-bold mb-4">Trailer</h3>
        {movieVideos && (
          <ReactPlayer
            url={`https://www.youtube.com/embed/${movieVideos.results[0].key}`}
            width="100%"
          />
        )}
      </div>
    </div>
  );
}
