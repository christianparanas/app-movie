import swr from "swr";

// constants
const TMDB_API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

import { fetcher } from "../util/fetcher";


export const getUpcomingMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    upcomingMoviesData: data,
    upcomingMoviesIsLoading: !error && !data,
    upcomingMoviesIsError: error
  }
}

export const getPopularMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    popularMoviesData: data,
    popularMoviesIsLoading: !error && !data,
    popularMoviesIsError: error
  }
}

export const getTopRatedMovies = () => {
  const { data, error } = swr(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    topRatedMoviesData: data,
    topRatedMoviesIsLoading: !error && !data,
    topRatedMoviesIsError: error
  }
}