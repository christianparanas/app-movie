import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";

import { getMovies } from "../lib/tmdb";
import MediaCard from "./mediacard";

const options = [
  { id: 1, title: "Popular Movies" },
  { id: 2, title: "Top Rated Movies" },
  { id: 3, title: "Upcoming Movies" },
];

function MovieList() {
  const [selectedPerson, setSelectedPerson] = useState(options[0]);

  const { data, isLoading, isError } = getMovies();

  if (isError) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (data) console.log(data);

  return (
    <div className="p-4 mt-6">
      <div className="flex text-slate-100 mb-6">
        <h1 className="mr-4 text-2xl font-extrabold">Movies</h1>
        <div className="relative w-full">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>{selectedPerson.title}</Listbox.Button>
            <Listbox.Options className="absolute z-50 top-8 left-0 text-sm bg-slate-900 p-1 w-fit text-slate-100 rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden ">
              {options.map((option) => (
                <Listbox.Option
                  className="py-1 px-2 flex items-center cursor-pointer hover:text-slate-400"
                  key={option.id}
                  value={option}
                >
                  {option.title}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>

      <div className="relative p4 grid grid-cols-2 gap-4">
        {data.results.map((result, key) => {
          return (
            <Fragment key={key}>
              <MediaCard result={result} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
