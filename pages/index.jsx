
import { getMovies } from "../lib/tmdb";
import Page from "../components/page";
import MediaCard from "../components/mediaCard";
import MovieList from "../components/movieList";


export default function Home() {
  const { data, isLoading, isError } = getMovies();

  if (isError) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (data) console.log(data);

  return (
    <Page>
      <MediaCard />
      <MovieList />
    </Page>
  );
}
