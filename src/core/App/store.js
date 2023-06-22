import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import popularPeopleReducer from "../../features/PeopleBrowser/PeopleList/popularPeopleSlice";
import genresReducer from "../../features/MoviesBrowser/Genres/genresSlice";
import personDetailsReducer from "../../features/PeopleBrowser/PersonPage/PersonSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    genres: genresReducer,
    popularPeople: popularPeopleReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;