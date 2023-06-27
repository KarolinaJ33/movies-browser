import { call, select, put, takeLatest, } from "redux-saga/effects";
import { fetchMoviesListError, fetchMoviesListSuccess, goToPage, selectQuery, selectPage } from "./popularMoviesSlice";
import { searchMovie } from "../../../common/Navigation/Search/getSearch";
import { popularMovies } from "../../../features/MoviesBrowser/MovieList/getPopularMovies";


function* fetchPopularMoviesHandler() {
    try {
      const page = yield select(selectPage);
      const query = yield select(selectQuery);
      let data;
      if (query !== "") {
        data = yield call(searchMovie, { page: page, query: query });
      } else {
        data = yield call(popularMovies, { page: page });
      }
      yield put(fetchMoviesListSuccess({ data }));
    } catch (error) {
      yield put(fetchMoviesListError());
    }
  }
  
  export function* popularMoviesSaga() {
    yield takeLatest(goToPage.type, fetchPopularMoviesHandler);
  }
