import { GenresList } from "constants/genresList";

export const getGenre = (mediaType, genreId) => {
  if (mediaType === "movies") {
    return GenresList[0].map((genre) => {
      if (genre.id === genreId) return genre.title;
    });
  }

  return GenresList[1].map((genre) => {
    if (genre.id === genreId) return genre.title;
  });
};
