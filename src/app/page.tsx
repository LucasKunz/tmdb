import { HighlightMovies, MoviesSection } from "@/components";
import { HighlightMoviesSkeleton } from "@/components/highlight-movies/skeleton";
import { STRINGS } from "@/res/strings";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<HighlightMoviesSkeleton />}>
        <HighlightMovies />
      </Suspense>

      <Suspense fallback={<p>{STRINGS.SCREENS.HOME.LOADING}</p>}>
        <MoviesSection
          fetchUrl="/movie/popular"
          title={STRINGS.SCREENS.HOME.POPULAR_TITLE}
          isCarousel
        />
        <MoviesSection
          fetchUrl="/movie/upcoming"
          title={STRINGS.SCREENS.HOME.UPCOMING_TITLE}
          isCarousel
        />
      </Suspense>
    </>
  );
}
