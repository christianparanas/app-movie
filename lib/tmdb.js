import swr from "swr";

// constants
const TMDB_API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

import { fetcher } from "util/fetcher";


export const getTrendingMedia = () => {
  const { data, error } = swr(`${BASE_URL}//trending/all/day?api_key=${TMDB_API_KEY}`, fetcher)

  return {
    trendingMediaData: data,
    trendingMediaIsError: error
  }
}

// MOVIES
export const getUpcomingMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    upcomingMoviesData: data,
    upcomingMoviesIsError: error
  }
}

export const getPopularMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    popularMoviesData: data,
    popularMoviesIsError: error
  }
}

export const getTopRatedMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    topRatedMoviesData: data,
    topRatedMoviesIsError: error
  }
}

// SERIES
export const getAiringTodayTVSeries = () => {
  const { data, error } = swr(`${BASE_URL}/tv/airing_today?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    airingTodayTVSeriesData: data,
    airingTodayTVSeriesIsError: error
  }
}

export const getPopularTVSeries = () => {
  const { data, error } = swr(`${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    popularTVSeriesData: data,
    popularTVSeriesIsError: error
  }
}

export const getTopRatedTVSeries = () => {
  const { data, error } = swr(`${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    topRatedTVSeriesData: data,
    topRatedTVSeriesIsError: error
  }
}