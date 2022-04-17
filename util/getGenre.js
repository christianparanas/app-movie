import { GenresList } from "constants/genresList";

export const getGenre = (genreId) => {
  return GenresList.map((genre) => {
    if (genre.id === genreId) return genre.title;
  });
};
