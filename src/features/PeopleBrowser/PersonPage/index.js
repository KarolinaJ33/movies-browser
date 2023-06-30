import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  getPersonId,
  //selectCast,
  selectCredits,
  selectDetails,
  selectStatus,
} from "./PersonSlice";
import { PersonTile } from "./PersonTile";
import MovieTile from "../../MoviesBrowser/MovieList/MovieTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
import { Bottom, List, StyledLink } from "./styled";
import { toMovie } from "../../../core/App/routes";

export const PersonPage = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
  const details = useSelector(selectDetails);
  //const cast = useSelector(selectCast);
  const credits = useSelector(selectCredits);
  const status = useSelector(selectStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getPersonId({ personId: personId }));
        dispatch(fetchPersonDetails());
      } catch (error) {
        dispatch(fetchPersonDetailsError());
      }
    };

    fetchData();
  }, [personId, dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error />;
  }

  return (
    <Container>
      <PersonTile
        poster={details.profile_path}
        name={details.name}
        birthday={details.birthday}
        birthplace={details.place_of_birth}
        biography={details.biography}
      />
      {credits.cast.length > 0 && (
        <>
          <MainHeader title={`Movies - cast (${credits.cast.length})`} />
          <List>
            {credits.cast.map((movie) => (
              <div key={movie.id}>
                <StyledLink to={toMovie({ movieId: movie.id })}>
                  <MovieTile
                    movie={movie}
                    id={movie.id}
                    genres={movie.genre_ids}
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
            {credits.crew.map((movie) => (
              <div key={movie.id}>
                <StyledLink to={toMovie({ movieId: movie.id })}>
                  <MovieTile
                    movie={movie}
                    id={movie.id}
                    genres={movie.genre_ids}
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