import { HighlightMovies, MoviesSection } from "@/components";
import { HighlightMoviesSkeleton } from "@/components/highlight-movies/skeleton";

import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<HighlightMoviesSkeleton />}>
        <HighlightMovies />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <MoviesSection fetchUrl="/movie/popular" title="Em alta" isCarousel />
        <MoviesSection fetchUrl="/movie/upcoming" title="Upcoming" isCarousel />
      </Suspense>
    </>
  );
}
