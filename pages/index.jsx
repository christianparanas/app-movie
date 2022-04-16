
import { getMovies } from "../lib/tmdb";
import Page from "../components/page";


export default function Home() {
  const { data, isLoading, isError } = getMovies();

  if (isError) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (data) console.log(data);

  return (
    <Page>
      hey
    </Page>
  );
}
