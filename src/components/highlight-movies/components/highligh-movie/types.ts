import { MovieType } from "@/types";

export type HighlightMoviePropsType = {
  index: number;
  movie: MovieType;
};

export type HighlightMovieType = {
  results: MovieType[];
};
