import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsLoading, selectDetails, selectStatus, } from "./movieDetailsSlice";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
import { MovieTile } from "./MovieDetailsPage/MovieTile";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Backdrop from "./MovieDetailsPage/Backdrop";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const movieDetails = useSelector(selectDetails);

    const status = useSelector(selectStatus)
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
        <div>
            {movieDetails && movieDetails.backdrop_path &&
                <Backdrop
                    original_title={movieDetails.original_title}
                    backdrop_path={movieDetails.backdrop_path}
                    vote_average={movieDetails.vote_average}
                    vote_count={movieDetails.vote_count}
                />
            }
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
        </div>
    )
};

export default MovieDetails;