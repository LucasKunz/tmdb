import { MoviesResponseType, MoviesSectionPropsType } from "./types";
import { Movie } from "../movie";
import { tmdbFetch } from "@/lib/tmdb";
import { Carousel } from "../carousel/index";

export async function MoviesSection(props: MoviesSectionPropsType) {
  const { fetchUrl, isCarousel = false, title } = props;

  const moviesResponse = await tmdbFetch<MoviesResponseType>(fetchUrl);

  const sectionClassName = !isCarousel ? "px-10" : "";

  function renderTitle() {
    if (!title) {
      return null;
    }

    return <h1 className="text-white font-semibold text-2xl pl-9">{title}</h1>;
  }

  function renderMovies() {
    if (moviesResponse?.results) {
      const filteredMovies = moviesResponse.results.filter(
        (movie) => !!movie.poster_path
      );

      return filteredMovies.map((movie, index) => (
        <Movie
          key={movie.id}
          movie={movie}
          index={index}
          isCarousel={isCarousel}
        />
      ));
    }
  }

  function renderMoviesWrapper() {
    if (isCarousel) {
      return <Carousel>{renderMovies()}</Carousel>;
    }

    return renderMovies();
  }

  function renderContent() {
    if (!moviesResponse.results.length) {
      return (
        <p className="p-10 text-center text-2xl text-white">
          Não encontramos resultados para sua busca
        </p>
      );
    }

    return (
      <section className={`flex flex-col gap-10 ${sectionClassName}`}>
        {renderTitle()}
        <div className="flex gap-9 flex-wrap justify-center">
          {renderMoviesWrapper()}
        </div>
      </section>
    );
  }

  return renderContent();
}
