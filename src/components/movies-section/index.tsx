import { MoviesResponseType, MoviesSectionPropsType } from "./types";
import { Movie } from "../movie";
import { tmdbFetch } from "@/lib/tmdb";
import { Carousel } from "../carousel/index";
import { STRINGS } from "@/res/strings";

export async function MoviesSection(props: MoviesSectionPropsType) {
  const { fetchUrl, isCarousel = false, title } = props;

  const moviesResponse = await tmdbFetch<MoviesResponseType>(fetchUrl);

  const sectionClassName = !isCarousel ? "px-2 md:px-10" : "";

  function renderTitle() {
    if (!title) {
      return null;
    }

    return (
      <h1 className="pl-4 font-semibold text-white md:pl-9 md:text-2xl">
        {title}
      </h1>
    );
  }

  function renderMovies() {
    if (moviesResponse?.results) {
      const filteredMovies = moviesResponse.results.filter(
        (movie) => !!movie.poster_path,
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
          {STRINGS.COMPONENTS.MOVIES_SECTION.NO_RESULTS}
        </p>
      );
    }

    return (
      <section
        className={`flex flex-col gap-10 overflow-hidden ${sectionClassName}`}
      >
        {renderTitle()}
        <div className="flex flex-wrap justify-center gap-4 md:gap-9">
          {renderMoviesWrapper()}
        </div>
      </section>
    );
  }

  return renderContent();
}
