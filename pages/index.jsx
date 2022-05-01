import { Page, MovieList, SeriesList, Carousel } from "components";
import { useSelector, useDispatch } from "react-redux";

import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getAiringTodayTVSeries,
  getPopularTVSeries,
  getTopRatedTVSeries,
  getTrendingMedia,
} from "lib/tmdb";
import Search from "components/Search";

export default function Home({ trendingMedia, movies, series }) {
  return (
    <Page>
      <Search />
      <Carousel trending={trendingMedia} />
      
      <MovieList movies={movies} />
      <SeriesList series={series} />
    </Page>
  );
}

export async function getStaticProps() {
  const trendingMedia = await getTrendingMedia();

  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  const airingTodayTVSeries = await getAiringTodayTVSeries();
  const popularTVSeries = await getPopularTVSeries();
  const topRatedTVSeries = await getTopRatedTVSeries();

  return {
    props: {
      trendingMedia,
      movies: {
        upcomingMovies,
        popularMovies,
        topRatedMovies,
      },
      series: {
        airingTodayTVSeries,
        popularTVSeries,
        topRatedTVSeries,
      },
    },
  };
}
