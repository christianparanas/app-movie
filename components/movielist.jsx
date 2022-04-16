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

  const { upcomingMoviesData, upcomingMoviesIsLoading, upcomingMoviesIsError } =
    getUpcomingMovies();
  const { popularMoviesData, popularMoviesIsLoading, popularMoviesIsError } =
    getPopularMovies();
  const { topRatedMoviesData, topRatedMoviesIsLoading, topRatedMoviesIsError } =
    getTopRatedMovies();

  return (
    <div className="p-4 mt-6 md:w-10/12 mx-auto">
      <h1 className="mr-4 text-2xl font-extrabold text-slate-50">Movies</h1>

      <div className="flex border-b border-slate-900 mt-4 mb-6 gap-4 text-sm">
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

      <div className="">
        <TabPanel hidden={selectedTab !== "upcoming"}>
          <div className="relative p4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {upcomingMoviesData &&
              upcomingMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>

        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="relative p4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {popularMoviesData &&
              popularMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "rated"}>
          <div className="relative p4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {topRatedMoviesData &&
              topRatedMoviesData.results.slice(0, 12).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard media={media} />
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
