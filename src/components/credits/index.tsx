import { tmdbFetch } from "@/lib/tmdb";
import {
  CreditsPropsType,
  CreditsResponseType,
  RenderCreditsParamsType,
} from "./types";

export async function Credits(props: CreditsPropsType) {
  const { movieId } = props;
  const creditsData = await tmdbFetch<CreditsResponseType>(
    `/movie/${movieId}/credits`,
  );

  if (!creditsData.cast.length) {
    return null;
  }

  const director = creditsData.crew.find((person) => person.job === "Director");
  const producer = creditsData.crew
    .filter((person) => person.job === "Producer")
    .map((person) => person.name)
    .join(", ");
  const cast = creditsData.cast.map((person) => person.name).join(", ");

  function renderCredits(params: RenderCreditsParamsType) {
    const { label, value } = params;

    if (!value) {
      return null;
    }

    return (
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-white">{label}</span>
        <span className="text-xl text-white">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {renderCredits({ label: "Director", value: director?.name })}
      {renderCredits({ label: "Produtores", value: producer })}
      {renderCredits({ label: "Elenco", value: cast })}
    </div>
  );
}
