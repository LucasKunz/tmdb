import { MovieSkeleton } from "@/components/movie/skeleton";

export function GenreLoading() {
  return (
    <section className="flex gap-10 pl-9">
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
    </section>
  );
}
