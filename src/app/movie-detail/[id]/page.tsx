import { tmdbFetch } from "@/lib/tmdb";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import {
  MovieDetailsPropsType,
  MovieDetailsType,
  RenderCreditsParamsType,
} from "./types";

export default async function MovieDetail(props: MovieDetailsPropsType) {
  const { params } = props;
  const { id } = await params;

  const movieResponse = await tmdbFetch<MovieDetailsType>(`/movie/${id}`);

  const { backdrop_path, genres, overview, title, vote_average } =
    movieResponse;

  function renderGenresTags() {
    return genres.slice(0, 2).map((genre) => (
      <span
        key={genre.id}
        className="text-gray border-gray rounded-full border px-4 py-0.5 font-medium"
      >
        {genre.name}
      </span>
    ));
  }

  function renderCredits(params: RenderCreditsParamsType) {
    const { label, value } = params;
    return (
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-white">{label}</span>
        <span className="text-xl text-white">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 px-10 md:max-w-10/12 2xl:mx-auto">
      <div className="relative flex h-82.5 w-full">
        <Image
          alt={title}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          className="h-82.5 w-full rounded-2xl object-cover"
          height={330}
          width={1198}
        />
        <div className="absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-col items-center justify-center gap-3">
          <button className="flex items-center justify-center gap-1.5 rounded-full border-2 border-[#E8E8E833]/20 bg-white/15 p-7 backdrop-blur-sm">
            <Play className="fill-white text-white" size={50} />
          </button>
          <h2 className="w-full text-center text-2xl font-medium text-white shadow-2xl text-shadow-lg">
            Watch trailer
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 md:w-3/4">
        <div className="flex flex-col items-center justify-center gap-2 max-md:gap-8 md:flex-row md:justify-between">
          <div>
            <h1 className="text-2xl font-medium text-white">
              {title} • 2022 • 13 • 2h10
            </h1>
          </div>
          <div className="flex flex-col items-start gap-3 max-md:w-full max-md:gap-8 md:flex-row">
            <div className="flex gap-2">{renderGenresTags()}</div>
            <div className="flex items-center gap-2">
              <Star className="fill-[#ddaf12] text-transparent" size={30} />
              <p className="text-2xl font-medium text-white">
                {vote_average.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-xl text-white">{overview}</p>
        <span className="bg-dove-gray h-px w-full rounded-full" />
        <div className="flex flex-col gap-4">
          {renderCredits({ label: "Director", value: "Jeyaraj" })}
          {renderCredits({ label: "Cast", value: "Kamal Haasan" })}
          {renderCredits({ label: "Language", value: "Tamil" })}
        </div>
      </div>
    </div>
  );
}
