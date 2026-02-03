import { MoviesSection } from "@/components";
import { STRINGS } from "@/res/strings";
import { SearchPropsType } from "./types";

export default async function Search(props: SearchPropsType) {
  const { searchParams } = props;
  const { q } = await searchParams;

  return (
    <MoviesSection
      fetchUrl={`/search/movie?query=${q}`}
      title={`${STRINGS.SCREENS.SEARCH.TITLE_PREFIX} ${q}`}
    />
  );
}
