import Link from "next/link";
import { Fragment } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";

import {
  getAiringTodayTVSeries,
  getPopularTVSeries,
  getTopRatedTVSeries,
} from "lib/tmdb";
import MediaCard from "./mediacard";
import TabSelector from "./TabSelector";

function SeriesList() {
  const [selectedTab, setSelectedTab] = useTabs(["latest", "popular", "rated"]);

  const { airingTodayTVSeriesData, airingTodayTVSeriesIsError } =
    getAiringTodayTVSeries();
  const { popularTVSeriesData, popularTVSeriesIsError } = getPopularTVSeries();
  const { topRatedTVSeriesData, topRatedTVSeriesIsError } =
    getTopRatedTVSeries();

  if (airingTodayTVSeriesIsError)
    return <div className="">Something went wrong</div>;

  if (airingTodayTVSeriesData) console.log(airingTodayTVSeriesData);

  return (
    <div className="p-4 mt-6 md:w-10/12 mx-auto min-h-fit lg:h-[1000px]">
      <h1 className="mr-4 mb-10 text-4xl font-extrabold sm:text-5xl">
        <span className="text-[#7B7B8F]">
          TV SERIES
        </span>
      </h1>

      <div className="flex border-b border-slate-800 pb-4 mt-4 mb-6 text-sm overflow-x-scroll sm:overflow-hidden">
        <TabSelector
          isActive={selectedTab === "latest"}
          onClick={() => setSelectedTab("latest")}
        >
          LATEST
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
        <TabPanel hidden={selectedTab !== "latest"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {airingTodayTVSeriesData &&
              airingTodayTVSeriesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="series" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>

        <TabPanel hidden={selectedTab !== "popular"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {popularTVSeriesData &&
              popularTVSeriesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="series" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "rated"}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {topRatedTVSeriesData &&
              topRatedTVSeriesData.results.slice(0, 10).map((media, key) => {
                return (
                  <Fragment key={key}>
                    <MediaCard mediaType="series" media={media} />
                  </Fragment>
                );
              })}
          </div>
        </TabPanel>
      </div>

      <div className="flex w-full h-40 justify-center items-center">
        <Link href="/movies" passHref>
          <a className="text-lg font-semibold text-slate-100 py-3 px-7 rounded-3xl bg-[#25252e] hover:bg-purple-800 hover:text-slate-200">
            See More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SeriesList;
