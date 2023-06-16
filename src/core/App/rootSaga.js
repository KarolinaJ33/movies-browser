import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "../features/movies/MoviesList/popularMoviesSaga";
import { genresSaga } from "../features/movies/Genres/genresSaga";
import { popularPeopleSaga} from "../features/people/PeopleList/popularPeopleSaga";
import { movieDetailsSaga } from "../features/movies/MovieDetails/movieDetailsSaga";
import { popularPeopleSaga } from "../features/people/PersonPage/popularPeopleSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(), 
    genresSaga(),
    popularPeopleSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
  ]);
}