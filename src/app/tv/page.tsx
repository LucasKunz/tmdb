import { MoviesSection } from "@/components";

export default async function Tv() {
  return <MoviesSection fetchUrl="/tv/top_rated" />;
}
