import { useState } from "react";
import { Listbox } from "@headlessui/react";

const options = [
  { id: 1, title: "Popular Movies" },
  { id: 2, title: "Top Rated Movies" },
  { id: 3, title: "Upcoming Movies" },
];

function MovieList() {
  const [selectedPerson, setSelectedPerson] = useState(options[0]);

  return (
    <div className="p-4">
      <div className="flex">
        <h1 className="mr-4">Movies</h1>
        <div className="relative w-full">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>{selectedPerson.name}</Listbox.Button>
            <Listbox.Options className="absolute top-8 left-0 text-sm bg-slate-900 p-1 w-fit text-slate-100 rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden ">
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
    </div>
  );
}

export default MovieList;
