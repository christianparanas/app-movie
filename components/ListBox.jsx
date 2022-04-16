import React from "react";
import { Listbox } from "@headlessui/react";

const options = [
  { id: 1, title: "Popular Movies" },
  { id: 2, title: "Top Rated Movies" },
  { id: 3, title: "Upcoming Movies" },
];

function ListBox() {
  const [selectedPerson, setSelectedPerson] = useState(options[0]);

  return (
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
  );
}

export default ListBox;
