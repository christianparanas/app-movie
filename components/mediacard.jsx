import Image from "next/image";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

function MediaCard({ result }) {
  return (
    <div className="">
      <img
        className="w-full rounded-md shadow-lg"
        src={`${TMDB_IMG_BASE_URL}${result.poster_path}`}
      />
    </div>
  );
}

export default MediaCard;
