import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import popularMoviesSlice from "../../features/MoviesBrowser/MovieList/popularMoviesSlice";
import popularPeopleReducer from "../../features/PeopleBrowser/PeopleList/popularPeopleSlice";
import personDetailsReducer from "../../features/PeopleBrowser/PersonPage/PersonSlice";
import genresSlice from "../../features/MoviesBrowser/Genres/genresSlice";
import movieDetailsSlice from "../../features/MoviesBrowser/MovieDetails/movieDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    genres: genresSlice,
    popularPeople: popularPeopleReducer,
    personDetails: personDetailsReducer,
    movieDetails: movieDetailsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;