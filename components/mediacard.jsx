import Image from "next/image";
import FadeIn from "react-fade-in";

const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

function MediaCard({ media }) {
  return (
    <FadeIn>
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          className="rounded-md shadow-lg z-10"
          src={`${TMDB_IMG_BASE_URL}${media.poster_path}`}
          placeholder="blur"
          blurDataURL="/"
          layout="fill"
          objectFit="cover"
        />
        <div className=""></div>
      </div>
    </FadeIn>
  );
}

export default MediaCard;
