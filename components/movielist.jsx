import Link from "next/link";
import { useState, Fragment } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";

import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../lib/tmdb";
import MediaCard from "./MediaCard";
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
    <div className="p-4 mt-10 mx-auto min-h-fit h-[2159px] md:mt-20 md:w-10/12 lg:h-[1000px]">
      <h1 className="mr-4 mb-10 text-xl lg:text-3xl font-extrabold sm:text-5xl">
        <span className="text-[#7B7B8F]">
          MOVIES
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

      <div className="min-h-fit h-[1814px] lg:h-[716px]">
        <TabPanel hidden={selectedTab !== "upcoming"}>
          <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {upcomingMoviesData &&
              upcomingMoviesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>

        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularMoviesData &&
              popularMoviesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "rated"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topRatedMoviesData &&
              topRatedMoviesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="movies" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
      </div>

      {upcomingMoviesData && popularMoviesData && topRatedMoviesData && (
        <div className="flex w-full h-40 justify-center items-center">
          <Link href="/movies" passHref>
            <a className="text-lg font-semibold text-slate-100 py-3 px-7 rounded-3xl bg-[#25252e] hover:bg-purple-800 hover:text-slate-200">
              See More
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieList;
