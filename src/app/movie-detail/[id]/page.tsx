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
        className="text-gray font-medium border border-gray px-4 py-0.5 rounded-full"
      >
        {genre.name}
      </span>
    ));
  }

  function renderCredits(params: RenderCreditsParamsType) {
    const { label, value } = params;
    return (
      <div className="flex flex-col">
        <span className="text-white text-xl font-semibold">{label}</span>
        <span className="text-white text-xl">{value}</span>
      </div>
    );
  }

  return (
    <div className="px-10 gap-5 flex w-full flex-col max-w-10/12 2xl:mx-auto">
      <div className="flex relative w-full h-82.5">
        <Image
          alt={title}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          className="h-82.5 object-cover rounded-2xl w-full"
          height={330}
          width={1198}
        />
        <div className="absolute left-1/2 top-1/2 -translate-1/2 gap-3 items-center flex flex-col">
          <button className="flex gap-1.5 items-center p-7 bg-white/15 justify-center rounded-full backdrop-blur-sm border-2 border-[#E8E8E833]/20">
            <Play className="text-white fill-white" size={50} />
          </button>
          <h2 className="text-2xl text-white font-medium text-shadow-lg shadow-2xl">
            Watch trailer
          </h2>
        </div>
        {/* <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="absolute top-0 left-0 w-full h-82.5 rounded-2xl"
        /> */}
      </div>
      <div className="flex flex-col w-3/4 gap-6">
        <div className="flex gap-2 items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium text-white">
              {title} • 2022 • 13 • 2h10
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-2">{renderGenresTags()}</div>
            <div className="flex gap-2 items-center">
              <Star className="fill-[#ddaf12] text-transparent" size={30} />
              <p className="text-white text-2xl font-medium">
                {vote_average.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-xl">{overview}</p>
        <span className="w-full h-px bg-dove-gray rounded-full" />
        <div className="flex flex-col gap-4">
          {renderCredits({ label: "Director", value: "Jeyaraj" })}
          {renderCredits({ label: "Cast", value: "Kamal Haasan" })}
          {renderCredits({ label: "Language", value: "Tamil" })}
        </div>
      </div>
    </div>
  );
}
