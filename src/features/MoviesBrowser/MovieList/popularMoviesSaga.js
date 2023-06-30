import { call, delay, put, takeLatest, } from "redux-saga/effects";
import { fetchMoviesError, fetchMoviesLoading, fetchMoviesSuccess } from "./popularMoviesSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getGenres } from "../Genres/genres";

function* fetchMoviesHandler() {
    try {
        yield delay(1000);
        const movies = yield call(getPopularMovies);
        const genres = yield call(getGenres);
        yield put(fetchMoviesSuccess({movies, genres}));
    } catch {
        yield put(fetchMoviesError())
    }
};

export function* PopularMoviesSaga() {
    yield takeLatest(fetchMoviesLoading.type, fetchMoviesHandler)
};
