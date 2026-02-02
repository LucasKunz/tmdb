import { MoviesSection } from "@/components";
import { SearchPropsType } from "./types";

export default async function Search(props: SearchPropsType) {
  const { searchParams } = props;
  const { q } = await searchParams;

  return (
    <MoviesSection
      fetchUrl={`/search/movie?query=${q}`}
      title={`Exibindo buscas para: ${q}`}
    />
  );
}
