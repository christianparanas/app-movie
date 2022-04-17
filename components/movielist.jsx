import { useState, Fragment } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";

import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../lib/tmdb";
import MediaCard from "./mediacard";
import TabSelector from "./TabSelector";

function MovieList() {
  const [selectedTab, setSelectedTab] = useTabs([
    "upcoming",
    "popular",
    "rated",
  ]);

  const { upcomingMoviesData, upcomingMoviesIsError } = getUpcomingMovies();
  const { popularMoviesData, popularMoviesIsError } = getPopularMovies();
  const { topRatedMoviesData, topRatedMoviesIsError } = getTopRatedMovies();

  if (upcomingMoviesIsError)
    return <div className="">Something went wrong</div>;

  return (
    <div className="p-4 mt-6 md:w-10/12 mx-auto min-h-fit h-[2000px] lg:h-[774px]">
      <h1 className="mr-4 mb-10 text-4xl font-extrabold sm:text-5xl">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Movies
        </span>
      </h1>

      <div className="flex border-b border-slate-800 pb-4 mt-4 mb-6 text-sm overflow-x-scroll sm:overflow-hidden">
        <TabSelector
          isActive={selectedTab === "upcoming"}
          onClick={() => setSelectedTab("upcoming")}
        >
          UPCOMING
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "popular"}
          onClick={() => setSelectedTab("popular")}
        >
          MOST POPULAR
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "rated"}
          onClick={() => setSelectedTab("rated")}
        >
          MOST RATED
        </TabSelector>
      </div>

      <div className="min-h-fit h-fit">
        <TabPanel hidden={selectedTab !== "upcoming"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {upcomingMoviesData &&
              upcomingMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>

        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {popularMoviesData &&
              popularMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "rated"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {topRatedMoviesData &&
              topRatedMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default MovieList;
