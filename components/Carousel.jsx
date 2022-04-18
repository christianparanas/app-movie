import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lib
import { getTrendingMedia } from "lib/tmdb";

// components
import { CarouselCard } from "components";

export default function Carousel() {
  const { trendingMediaData, trendingMediaIsError } = getTrendingMedia();

  if (trendingMediaData) console.log(trendingMediaData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="w-full lg:min-h-screen mx-auto">
      <Slider {...settings}>
        {trendingMediaData &&
          trendingMediaData.results
            .slice(0, 4)
            .map((data, key) => <CarouselCard key={key} data={data} />)}
      </Slider>
    </div>
  );
}
