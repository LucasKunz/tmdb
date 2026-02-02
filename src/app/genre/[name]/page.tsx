import { MoviesSection } from "@/components";
import { GenrePropsType } from "./types";
import { Suspense } from "react";

import { GenreLoading } from "./skeleton";

export default async function Genre(props: GenrePropsType) {
  const { params } = props;
  const { name } = await params;

  return (
    <Suspense fallback={<GenreLoading />}>
      <MoviesSection fetchUrl={`/discover/movie?with_genres=${name}`} />;
    </Suspense>
  );
}
