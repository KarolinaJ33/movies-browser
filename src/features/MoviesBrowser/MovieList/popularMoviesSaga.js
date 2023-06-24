import { call, delay, put, takeLatest, } from "redux-saga/effects";
import { fetchMoviesError, fetchMoviesLoading, fetchMoviesSuccess } from "./popularMoviesSlice";
import { getPopularMovies } from "./getPopularMovies";

function* fetchMoviesHandler() {
    try {
        yield delay(1000);
        const movies = yield call(getPopularMovies);
        yield put(fetchMoviesSuccess(movies));
    } catch {
        yield put(fetchMoviesError())
    }
};

export function* PopularMoviesSaga() {
    yield takeLatest(fetchMoviesLoading.type, fetchMoviesHandler)
};
