import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import popularMoviesSlice from "../../features/MoviesBrowser/MovieList/popularMoviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesSlice,

  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;