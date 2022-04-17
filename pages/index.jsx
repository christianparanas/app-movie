import Page from "components/page";
import MovieList from "components/movielist";
import SeriesList from "components/serieslist";
import Carousel from "components/Carousel";

export default function Home() {
  return (
    <Page>
      <div className="grid gap-40">

        <MovieList />
        <SeriesList />
      </div>
    </Page>
  );
}
