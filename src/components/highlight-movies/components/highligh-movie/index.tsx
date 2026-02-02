import Image from "next/image";
import Link from "next/link";
import { HighlightMoviePropsType } from "./types";

const PRIORITY_IMAGES = [0, 1];

export function HighlightMovie(props: HighlightMoviePropsType) {
  const { index, movie } = props;
  const { backdrop_path, id } = movie;

  const isPriorityImage = PRIORITY_IMAGES.includes(index);

  return (
    <div className="flex relative shrink-0 h-87.5 w-200 embla__slide flex-[0_0_55%] min-w-0 max-w-200">
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
        className="rounded-3xl object-cover h-87.5 w-200"
        height={400}
        width={800}
        preload={isPriorityImage}
        loading={isPriorityImage ? "eager" : "lazy"}
        fetchPriority={isPriorityImage ? "high" : "low"}
      />
      <div className="absolute right-8 bottom-5 items-center flex gap-6">
        <Link
          href={`/movie-detail/${id}`}
          className="flex gap-1.5 items-center py-3 px-6 bg-[#E8E8E826]/15 justify-center rounded-2xl backdrop-blur-[5px]"
        >
          <Image alt="" src="/play.svg" height={30} width={30} />
          <span className="text-xl text-white font-semibold">Play</span>
        </Link>
        <button className="flex gap-1.5 items-center py-3 px-6 bg-[#E8E8E826]/15 justify-center rounded-2xl backdrop-blur-[5px]">
          <Image alt="" src="/info.svg" height={25} width={25} />
          <span className="text-xl text-white font-semibold">Detalhes</span>
        </button>
      </div>
    </div>
  );
}
