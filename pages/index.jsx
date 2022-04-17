import { Page, MovieList, SeriesList } from "components";

export default function Home() {
  return (
    <Page>
      <div className="">
        <MovieList />
        <SeriesList />
      </div>
    </Page>
  );
}
