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
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-gray font-light">
        {STRINGS.COMPONENTS.SIDE_BAR.GENRES_TITLE}
      </h2>
      <ul className="flex flex-col gap-4">{renderGenres()}</ul>
    </div>
  );
}
