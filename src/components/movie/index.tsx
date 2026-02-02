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
      <div className="w-50 h-78.75 animate-pulse bg-dove-gray rounded-3xl absolute z-10 top-0" />
    );
  }

  function renderVoteAverage() {
    if (vote_average === 0) {
      return null;
    }

    return (
      <div className="absolute top-0 flex gap-2 right-0 bg-[#E8E8E826]/15 py-1 px-2 rounded-bl-[20px] rounded-tr-[20px] backdrop-blur-sm ">
        <Image
          alt=""
          src="/star.png"
          className="object-cover size-5"
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
      className={`relative w-50 h-78.75 min-w-0 ${carouselClassname} ${firstMovieClassName}`}
      href={`/movie-detail/${id}`}
    >
      <Image
        alt={title}
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        className="rounded-3xl w-50 h-78.75 object-cover"
        height={315}
        onLoad={() => setIsLoading(false)}
        width={200}
      />
      {renderSkeleton()}
      {renderVoteAverage()}
    </Link>
  );
}
