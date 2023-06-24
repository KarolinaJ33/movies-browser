import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import MovieTile from "./MovieTile";
import { Container, Header, Wrapper } from "./styled";
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

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

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

    const renderMovies = () => (
        movies.map(movie => (
            <MovieTile
                key={movie.id}
                movie={movie}
            />
        )));

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
                        <Header>Popular movies</Header>
                        <Wrapper>
                            {renderMovies()}
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