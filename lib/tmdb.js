const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

import { fetcher } from "util/fetcher";

export async function getTrendingMedia() {
  const data = await fetcher(
    `${BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`
  );

  return data;
}

// MOVIES
export async function getMovie(movieId) {
  const data = await fetcher(
    `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
  );

  return data;
}

export async function getUpcomingMovies() {
  const data = await fetcher(
    `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}

export async function getPopularMovies() {
  const data = await fetcher(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}

export async function getTopRatedMovies() {
  const data = await fetcher(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}

// SERIES
export async function getAiringTodayTVSeries() {
  const data = await fetcher(
    `${BASE_URL}/tv/airing_today?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}

export async function getPopularTVSeries() {
  const data = await fetcher(
    `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}

export async function getTopRatedTVSeries() {
  const data = await fetcher(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  return data;
}
