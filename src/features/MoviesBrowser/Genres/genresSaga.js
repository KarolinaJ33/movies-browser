import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "./genres";
import {
    fetchGenresSuccess,
    fetchGenresError,
    fetchGenresLoading,
} from "./genresSlice";

function* fetchGenresHandler() {
    try {
        const genres = yield call(getGenres);
        yield put(fetchGenresSuccess(genres));
    } catch (error) {
        yield put(fetchGenresError());
        yield call(alert, "Download failed, please try again later");
    }
}

export function* genresSaga() {
    yield takeLatest(fetchGenresLoading, fetchGenresHandler);
}