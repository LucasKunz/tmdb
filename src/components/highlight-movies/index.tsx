import { tmdbFetch } from "@/lib/tmdb";

import { Carousel } from "../carousel";
import { HighlightMovieType } from "./components/highligh-movie/types";
import { HighlightMovie } from "./components/highligh-movie";

export async function HighlightMovies() {
  const data = await tmdbFetch<HighlightMovieType>("/movie/top_rated");

  const highlightMovies = data.results.slice(0, 10);

  if (!highlightMovies.length) {
    return null;
  }

  function renderHighlightMovies() {
    return data.results
      .slice(0, 10)
      .map((movie, index) => (
        <HighlightMovie key={movie.id} index={index} movie={movie} />
      ));
  }

  return (
    <section className="flex gap-x-14 overflow-hidden">
      <Carousel>{renderHighlightMovies()}</Carousel>
    </section>
  );
}
