export type RenderCreditsParamsType = {
  label: string;
  value: string | undefined;
};

export type CreditsPropsType = {
  movieId: string;
};

type CastInfoType = {
  cast_id: number;
  character: string;
  credit_id: string;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  profile_path: string;
};

type CrewInfoType = CastInfoType & {
  department: string;
  job: string;
};

export type CreditsResponseType = {
  cast: CastInfoType[];
  crew: CrewInfoType[];
};
