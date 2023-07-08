import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import MovieTile from "./MovieTile";
import { Container, Header, StyledLink, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMoviesLoading,
    fetchMoviesSuccess,
    selectCurrentPage,
    selectPopularMoviesStatus,
    selectTotalPages,
    setCurrentPage,
    setTotalPages
} from "./popularMoviesSlice";
import { useState } from "react";
import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
import { toMovie } from "../../../core/App/routes";
import { searchQueryParamName } from "../../../queryParamName";
import { useQueryParameter } from "../../../queryParameters";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    const query = useQueryParameter(searchQueryParamName);


    useEffect(() => {
        const fetchMovies = async () => {

            try {
                dispatch(fetchMoviesLoading(true))
                const response = await fetch(
                    `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                setMovies(data.results.slice(0, 8));
                dispatch(fetchMoviesSuccess(setMovies));
                dispatch(setTotalPages(Math.min(data.total_pages, 500)));
            }
            catch (error) {
                console.error(error)
            }
            finally {
                dispatch(fetchMoviesLoading(false));
            }
        }
        fetchMovies();
    }, [dispatch, currentPage,]);

    const handleFirstPage = () => {
        dispatch(setCurrentPage(1));
    };

    const handlePrevPage = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };

    const handleNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const handleLastPage = () => {
        dispatch(setCurrentPage(totalPages));
    };

    return (
        <>
            {status === "loading" ?
                <Loading />
                : status === "success" ?
                    <Container>
                        <Header title={
              query
                ? `Search results for “${query}” (${totalPages})`
                : `Popular Movies`
            }
          />
                        <Wrapper>
                        {movies.map(movie => (
                            <div key={movie.id}>
                                <StyledLink to={toMovie({ movieId: movie.id })}>
                                    <MovieTile
                                        id={movie.id}
                                        movie={movie}
                                    />
                                </StyledLink>
                            </div>
                            ))}
                        </Wrapper>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onFirstPage={handleFirstPage}
                            onPrevPage={handlePrevPage}
                            onNextPage={handleNextPage}
                            onLastPage={handleLastPage}
                        />
                    </Container> :
                    <Error />}
        </>
    );
};

export default MoviesList;