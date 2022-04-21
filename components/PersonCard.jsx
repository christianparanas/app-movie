import React from "react";
import Image from "next/image";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

export default function PersonCard({ personType, person }) {
  const [src, setSrc] = React.useState(
    `${TMDB_IMG_BASE_URL}${person.profile_path}`
  );

  return (
    <div className="relative h-fit min-w-[200px] bg-[#0e0e12] mr-4 rounded-lg shadow-lg">
      <Image
        width={200}
        height={300}
        placeholder="blur"
        blurDataURL="/"
        objectFit="cover"
        src={person.profile_path == null ? "/placeholder.svg" : src}
        alt={person.name}
        className="rounded-t-lg shadow-2xl"
      />
      <div className="text-white p-2 text-sm">
        <div className="">{person.name}</div>
        <div className="text-xs">
          {personType == "cast" ? (
            <div className="">as {person.character.length > 10 ? `${person.character.substring(0, 25)} ...` : person.character }</div>
          ) : (
            <div className="">- {person.job}</div>
          )}
        </div>
      </div>
    </div>
  );
}
