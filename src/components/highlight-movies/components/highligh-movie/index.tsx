import Image from "next/image";
import Link from "next/link";
import { HighlightMoviePropsType } from "./types";
import { Play } from "lucide-react";

const PRIORITY_IMAGES = [0, 1];

export function HighlightMovie(props: HighlightMoviePropsType) {
  const { index, movie } = props;
  const { backdrop_path, id, poster_path } = movie;

  const isPriorityImage = PRIORITY_IMAGES.includes(index);
  const firstMovieClassName = index === 0 ? "ml-9" : "";

  return (
    <div
      className={`flex relative shrink-0 h-108 md:h-87.5 w-200 embla__slide flex-[0_0_85%] md:flex-[0_0_55%] min-w-0 max-w-200 ${firstMovieClassName}`}
    >
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        />
        <Image
          alt=""
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          className="rounded-3xl object-cover h-108 md:h-87.5 w-200"
          height={400}
          width={800}
          preload={isPriorityImage}
          loading={isPriorityImage ? "eager" : "lazy"}
          fetchPriority={isPriorityImage ? "high" : "low"}
        />
      </picture>
      <picture></picture>
      <div className="absolute max-md:left-2 md:right-8 bottom-5 items-start md:items-center flex gap-6">
        <Link
          href={`/movie-detail/${id}`}
          className="flex gap-1.5 items-center py-3 px-6 bg-[#E8E8E826]/15 justify-center rounded-2xl backdrop-blur-[5px]"
        >
          <Play className="fill-white text-white" />
          <span className="text-xl text-white font-semibold">Play</span>
        </Link>
        <button className="hidden md:flex gap-1.5 items-center py-3 px-6 bg-[#E8E8E826]/15 justify-center rounded-2xl backdrop-blur-[5px]">
          <Image alt="" src="/info.svg" height={25} width={25} />
          <span className="text-xl text-white font-semibold">Detalhes</span>
        </button>
      </div>
    </div>
  );
}
