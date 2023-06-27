import { DetailsRating } from "../Rating";
import { DetailsPictures } from "../Pictures";
import { AdditionalInfo, MainInfoDetails } from "../Info";
import { Overview, DetailsDescription, Details } from "./styled";

export const MovieDetailsTile = ({
  poster,
  title,
  year,
  vote,
  votes,
  overview,
  production,
  release,
}) => (
  <Details>
    <DetailsPictures poster={poster} />
    <DetailsDescription>
      <MainInfoDetails title={title} year={year} />
      <AdditionalInfo production={production} release={release} />
      <DetailsRating vote={vote} votes={votes} />
    </DetailsDescription>
    <Overview>{overview}</Overview>
  </Details>
);