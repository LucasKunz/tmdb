"use client";

import Image from "next/image";
import Link from "next/link";
import { MoviePropsType } from "./types";
import { useState } from "react";

export function Movie(props: MoviePropsType) {
  const { isCarousel, index, movie } = props;
  const { poster_path, id, title, vote_average } = movie;

  const [isLoading, setIsLoading] = useState(true);

  const carouselClassname = isCarousel ? "embla__slide flex-[0_0_200px]" : "";
  const firstMovieClassName = index === 0 && isCarousel ? "ml-9" : "";

  function renderSkeleton() {
    if (!isLoading) {
      return null;
    }

    return (
      <div className="bg-dove-gray absolute top-0 z-10 h-78.75 w-50 animate-pulse rounded-3xl" />
    );
  }

  function renderVoteAverage() {
    if (vote_average === 0) {
      return null;
    }

    return (
      <div className="absolute top-0 right-0 flex gap-2 rounded-tr-[20px] rounded-bl-[20px] bg-[#E8E8E826]/15 px-2 py-1 backdrop-blur-sm">
        <Image
          alt=""
          src="/star.png"
          className="size-5 object-cover"
          height={20}
          width={20}
        />
        <span className="font-medium text-white">
          {vote_average.toFixed(2)}
        </span>
      </div>
    );
  }

  return (
    <Link
      className={`relative h-63 w-40 min-w-0 md:h-78.75 md:w-50 ${carouselClassname} ${firstMovieClassName}`}
      href={`/movie-detail/${id}`}
    >
      <Image
        alt={title}
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        className="h-63 w-40 rounded-3xl object-cover md:h-78.75 md:w-50"
        height={315}
        onLoad={() => setIsLoading(false)}
        width={200}
      />
      {renderSkeleton()}
      {renderVoteAverage()}
    </Link>
  );
}
