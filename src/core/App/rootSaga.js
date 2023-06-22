import { all } from "redux-saga/effects";
import { PopularMoviesSaga } from "../../features/MoviesBrowser/MovieList/popularMoviesSaga";

export default function* rootSaga() {
  yield all([
    PopularMoviesSaga(),
  ]);
}