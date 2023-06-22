import { useEffect } from "react";
import Pagination from "../../../common/Pagination";
import MovieTile from "./MovieTile";
import { Container, Header, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useState } from "react";
import { API_KEY, ApiPopularMovies } from "../../../core/App/apiCodes";
import { Loading } from "../../../common/Loading";

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch();
    const status = useSelector(selectPopularMoviesStatus);

    useEffect(() => {
        dispatch((fetchMoviesLoading()))
    }, [dispatch]);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                `${ApiPopularMovies}?api_key=${API_KEY}&language=en-US&page=1`
            );
            const data = await response.json();
            setMovies(data.results);
            console.log(movies)
        }
        catch (error) {
            console.error("cos poszło nie tak")
        }
    };

    useEffect(() => {
        fetchMovies();
    },)

    const renderMovies = () => (
        movies.map(movie => (
            <MovieTile
                key={movie.id}
                movie={movie}
            />
        )))

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
                        <Pagination />
                    </Container> :
                    <div></div>}
        </>
    );
};

export default MoviesList;