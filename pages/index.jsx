import { Page, MovieList, SeriesList, Carousel } from "components";

export default function Home() {
  return (
    <Page>
        <Carousel />
        <MovieList />
        <SeriesList />
    </Page>
  );
}
