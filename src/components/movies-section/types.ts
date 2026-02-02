import { MovieType } from "@/types";

export type MoviesSectionPropsType = {
  fetchUrl: string;
  isCarousel?: boolean;
  title?: string;
};

export type MoviesResponseType = {
  results: MovieType[];
};
