import { tmdbFetch } from "@/lib/tmdb";
import { STRINGS } from "@/res/strings";
import { GenresType } from "./types";
import { GenreLink } from "./components";

export async function Genres() {
  const genresResponse = await tmdbFetch<GenresType>("/genre/movie/list");

  function renderGenres() {
    if (!genresResponse.genres.length) {
      return null;
    }

    return genresResponse.genres.map((genre) => (
      <GenreLink key={genre.id} genre={genre} />
    ));
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="font-light text-dove-gray">
        {STRINGS.COMPONENTS.SIDE_BAR.GENRES_TITLE}
      </h2>
      <ul className="gap-4 flex flex-col">{renderGenres()}</ul>
    </div>
  );
}
