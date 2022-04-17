
import Page from "../components/page";
import MovieList from "../components/movielist";
import SeriesList from 'components/seriesList'


export default function Home() {

  return (
    <Page>
      
      <div className="grid ">
      <MovieList />
      <SeriesList />
      </div>
    </Page>
  );
}
