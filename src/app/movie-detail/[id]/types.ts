import { Genre } from "@/components/genres/types";
import { MovieType } from "@/types";

export type MovieDetailsPropsType = {
  params: Promise<{ id: string }>;
};

export type MovieDetailsType = MovieType & {
  genres: Genre[];
  runtime: number;
};

export type RenderCreditsParamsType = {
  label: string;
  value: string;
};
