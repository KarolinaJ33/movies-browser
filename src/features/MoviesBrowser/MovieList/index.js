import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import MovieTile from "./MovieTile";
import { Container, Header, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, fetchMoviesSuccess, selectCurrentPage, selectPopularMoviesStatus, selectTotalPages, setCurrentPage, setTotalPages } from "./popularMoviesSlice";
import { useState } from "react";
import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";
import { Loading } from "../../../common/Loading";

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
                console.error("cos poszło nie tak")
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
                            onPrevPage={() => dispatch(setCurrentPage(currentPage - 1))}
                            onNextPage={() => dispatch(setCurrentPage(currentPage + 1))}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onLastPage={() => dispatch(setCurrentPage(totalPages))}
                            onFirstPage={() => dispatch(setCurrentPage(1))}
                        />
                    </Container> :
                    <div></div>}
        </>
    );
};

export default MoviesList;