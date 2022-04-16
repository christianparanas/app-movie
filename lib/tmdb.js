import useSWR from "swr";

// constants
const TMDB_API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

import { fetcher } from "../util/fetcher";


export const getMovies = () => {
  const { data, error } = useSWR(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}