import { STRINGS } from "@/res/strings";
import Image from "next/image";
import Link from "next/link";
import { HighlightMoviePropsType } from "./types";
import { Play } from "lucide-react";

const PRIORITY_IMAGES = [0, 1];

export function HighlightMovie(props: HighlightMoviePropsType) {
  const { index, movie } = props;
  const { backdrop_path, id, title, poster_path } = movie;

  const isPriorityImage = PRIORITY_IMAGES.includes(index);
  const firstMovieClassName = index === 0 ? "ml-9" : "";

  return (
    <div
      className={`embla__slide relative flex h-84 w-108 max-w-200 min-w-0 flex-[0_0_224px] shrink-0 md:h-87.5 md:w-200 md:flex-[0_0_55%] ${firstMovieClassName}`}
    >
      <Image
        alt={title}
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        className="h-84 w-108 rounded-3xl object-cover md:hidden md:h-87.5"
        height={432}
        width={272}
        preload={isPriorityImage}
        loading={isPriorityImage ? "eager" : "lazy"}
        fetchPriority={isPriorityImage ? "high" : "low"}
      />
      <Image
        alt={title}
        src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
        className="h-108 w-200 rounded-3xl object-cover max-md:hidden md:h-87.5"
        height={400}
        width={800}
        preload={isPriorityImage}
        loading={isPriorityImage ? "eager" : "lazy"}
        fetchPriority={isPriorityImage ? "high" : "low"}
      />

      <div className="absolute bottom-5 flex items-start gap-6 max-md:left-2 md:right-8 md:items-center">
        <Link
          href={`/movie-detail/${id}`}
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-[#E8E8E826]/15 px-6 py-3 backdrop-blur-[5px]"
        >
          <Play className="fill-white text-white" />
          <span className="text-xl font-semibold text-white">
            {STRINGS.COMPONENTS.HIGHLIGHT_MOVIE.PLAY}
          </span>
        </Link>
        <button className="hidden items-center justify-center gap-1.5 rounded-2xl bg-[#E8E8E826]/15 px-6 py-3 backdrop-blur-[5px] md:flex">
          <Image alt="" src="/info.svg" height={25} width={25} />
          <span className="text-xl font-semibold text-white">
            {STRINGS.COMPONENTS.HIGHLIGHT_MOVIE.DETAILS}
          </span>
        </button>
      </div>
    </div>
  );
}
