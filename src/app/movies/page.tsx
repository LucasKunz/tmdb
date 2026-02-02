import { MoviesSection } from "@/components";

export default async function Movies() {
  return <MoviesSection fetchUrl="/movie/top_rated" />;
}
