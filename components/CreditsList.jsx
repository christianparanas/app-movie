import React, { Fragment } from "react";

import { PersonCard } from "components";

export default function CreditsList({ movieCredits }) {

  return (
    <div className="md:w-[1200px] mb-20 rounded-lg mx-auto grid grid-cols-1 gap-20">
      {movieCredits && (
        <Fragment>
          <div className="">
            <h2 className="text-3xl font-bold text-slate-200 mb-4 pointer-events-auto">
              Cast
            </h2>
            <div className="flex overflow-x-auto pb-4">
              {movieCredits.cast.map((person) => (
                <PersonCard key={person.id} personType="cast" person={person} />
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-3xl font-bold text-slate-200 mb-4">Crew</h2>
            <div className="flex overflow-x-auto pb-4">
              {movieCredits.crew.map((person, key) => (
                <PersonCard key={key} personType="crew" person={person} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
