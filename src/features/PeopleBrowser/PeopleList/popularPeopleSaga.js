import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPopularPeople } from "./getPopularPeople";
import {
  goToPage,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
  selectPeoplePage,
  selectQuery,
} from "./popularPeopleSlice";
import { searchPeople } from "../../../common/Navigation/Search/getSearch";

function* fetchPopularPeopleHandler() {
  try {
    const page = yield select(selectPeoplePage);
    const query = yield select(selectQuery);
    let data;
    if (query !== "") {
      data = yield call(searchPeople, { page: page, query: query });
    } else {
      data = yield call(getPopularPeople, { page: page });
    }
    yield put(fetchPopularPeopleSuccess({ data }));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* popularPeopleSaga() {
    yield takeLatest(goToPage.type, fetchPopularPeopleHandler);
}