import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  getMovieId,
  selectCredits,
  selectDetails,
  selectStatus,
} from "./movieDetailsSlice";

import { MovieTile } from "../../../common/MovieTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
import { Bottom, List, StyledLink } from "./styled";
import { toPerson } from "../../../core/App/routes";
import { PersonTile } from "../../PeopleBrowser/PersonPage/PersonTile";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);
  const status = useSelector(selectStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getMovieId({ movieId: movieId }));
        dispatch(fetchMovieDetails());
      } catch (error) {
        dispatch(fetchMovieDetailsError());
      }
    };

    fetchData();
  }, [movieId, dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error />;
  }

  return (
    <Container>
      <MovieTile
          poster={details.poster_path}
          title={details.original_title}
          year={details.release_date}
          genres={details.genres}
          vote={details.vote_average}
          votes={details.vote_count}
          overview={details.overview}
          production={details.production_countries}
          release={details.release_date}
      />
      {credits.cast.length > 0 && (
        <>
          <MainHeader title={`Movies - cast (${credits.cast.length})`} />
          <List>
            {credits.cast.map((person) => (
              <div key={person.id}>
                <StyledLink to={toPerson({ perosnId: person.id })}>
                  <PersonTile
                    person={person}
                    id={person.id}
                    name={person.name}
                    role={person.profile_path}
                  />
                </StyledLink>
              </div>
            ))}
          </List>
        </>
      )}
      {credits.crew.length > 0 && (
        <>
          <MainHeader title={`Movies - crew (${credits.crew.length})`} />
          <List>
            {credits.crew.map((person) => (
              <div key={person.id}>
                <StyledLink to={toPerson({ mpersonId: person.id })}>
                  <PersonTile
                    person={person}
                    id={person.id}
                    name={person.name}
                    role={person.job}
                    poster={person.profile_path}
                  />
                </StyledLink>
              </div>
            ))}
          </List>
        </>
      )}
      <Bottom />
    </Container>
  );
};

export default MovieDetails;