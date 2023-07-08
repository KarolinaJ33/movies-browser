import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
    fetchError,
    fetchMovieDetailsLoading,
    fetchMovieDetailsSuccess,
    setCast,
    setCrew,
} from "./movieDetailsSlice";
import { getMovieDetails, getMovieDetailsCredits } from "./getMovieDetails";

function* fetchMovieDetailsHandler(action) {
    const { id } = action.payload;
    try {
        yield delay(1000);
        const movieDetails = yield call(getMovieDetails, id);
        const credits = yield call(getMovieDetailsCredits, id);
        yield put(fetchMovieDetailsSuccess(movieDetails));
        yield put(setCast(credits.cast));
        yield put(setCrew(credits.crew));
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetailsLoading.type, fetchMovieDetailsHandler);
}
