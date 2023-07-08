import { Bottom, Container, List, StyledLink, Wrapper } from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsLoading, selectCast, selectCrew, selectDetails, selectStatus, } from "./movieDetailsSlice";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
import { MovieTile } from "./MovieDetailsPage/MovieTile";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Backdrop from "./MovieDetailsPage/Backdrop";
import { toPerson } from "../../../core/App/routes";
import { PersonTile } from "../../../common/PersonTile";
import { MainHeader } from "../../../common/MainHeader";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const movieDetails = useSelector(selectDetails);
    const cast = useSelector((state) => selectCast(state));
    const crew = useSelector((state) => selectCrew(state));
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchMovieDetailsLoading({ id: movieId }));
    }, [dispatch, movieId]);

    if (status === "loading") {
        return <Loading />;
    }

    if (status === "error") {
        return <Error />;
    }

    return (
        <>
            {movieDetails && movieDetails.backdrop_path &&
                <Backdrop
                    original_title={movieDetails.original_title}
                    backdrop_path={movieDetails.backdrop_path}
                    vote_average={movieDetails.vote_average}
                    vote_count={movieDetails.vote_count}
                />
            }
            <Container>
                {movieDetails && movieDetails.title && (
                    <MovieTile
                        poster_path={movieDetails.poster_path}
                        title={movieDetails.title}
                        release={movieDetails.release_date}
                        production={movieDetails.production_countries}
                        genres={movieDetails.genres}
                        rate={movieDetails.vote_average}
                        votes={movieDetails.vote_count}
                        details={movieDetails.overview}
                    />
                )}
                {cast.length > 0 && (
                    <>
                        <Wrapper>
                            <MainHeader title={`Movies - cast (${cast.length})`} />
                            <List>
                                {cast.map((person, index) => (
                                    <div key={`$person.id-${index}`}>
                                        <StyledLink to={toPerson({ personId: person.id })}>
                                            <PersonTile
                                                id={person.id}
                                                name={person.name}
                                                poster={person.profile_path}
                                                role={person.character}
                                            />
                                        </StyledLink>
                                    </div>
                                ))}
                            </List>
                        </Wrapper>
                    </>
                )}
                {crew.length > 0 && (
                    <>
                        <Wrapper>
                            <MainHeader title={`Movies - crew (${crew.length})`} />
                            <List>
                                {crew.map((person, index) => (
                                    <div key={`$person.id-${index}`}>
                                        <StyledLink to={toPerson({ personId: person.id })}>
                                            <PersonTile
                                                id={person.id}
                                                name={person.name}
                                                role={person.job}
                                                poster={person.profile_path}
                                            />
                                        </StyledLink>
                                    </div>
                                ))}
                            </List>
                        </Wrapper>
                    </>
                )}
                <Bottom />
            </Container></>
    )
};

export default MovieDetails;