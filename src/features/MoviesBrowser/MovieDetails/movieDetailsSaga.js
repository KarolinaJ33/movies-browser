import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { getMovieDetails, getPersonCredits } from "./getMovieApi";
import {
    selectMovieId,
    getMovieId,
    
    selectPersonId,
    fetchMovieDetailsError,
    fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
    try {
        yield delay(1000);
        const movieId = yield select(selectMovieId);
        const details = yield call(getMovieDetails, { movieId: movieId });
        const credits = yield call(getPersonCredits, { personId: personId });
        const personId = yield select(selectPersonId);
        
      

        console.log("fetchMovieDetailsSuccess:", details, credits);

        yield put(fetchMovieDetailsSuccess({ details, credits }));
    } catch (error) {
        console.log("fetchMovieDetailsError:", error);

        yield put(fetchMovieDetailsError());
    }
}
export function* movieDetailsSaga() {
    yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
}
