import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import popularMoviesSlice from "../../features/MoviesBrowser/MovieList/popularMoviesSlice";
import popularPeopleReducer from "../../features/PeopleBrowser/PeopleList/popularPeopleSlice";
import genresReducer from "../../features/MoviesBrowser/Genres/genresSlice";
import personDetailsReducer from "../../features/PeopleBrowser/PersonPage/PersonSlice";
import movieDetailsReducer from "../../features/MoviesBrowser/MovieDetails/movieDetailsSlice";
import popularMoviesReducer from "../../features/MoviesBrowser/MovieList/popularMoviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,
    genres: genresReducer,
    popularPeople: popularPeopleReducer,
    personDetails: personDetailsReducer,
    movieDetails: movieDetailsReducer,
    popularMovies: popularMoviesReducer,
    
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;