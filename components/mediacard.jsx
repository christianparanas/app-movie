import Image from "next/image";
import FadeIn from "react-fade-in";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

function MediaCard({ media }) {
  return (
    <FadeIn>
      <div className="">
        <img
          className="w-full rounded-md shadow-lg"
          src={`${TMDB_IMG_BASE_URL}${media.poster_path}`}
        />
      </div>
    </FadeIn>
  );
}

export default MediaCard;
