import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { getPopularPeople } from "./getPopularPeople";
import {
  goToPage,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
  selectPeoplePage,
  selectQuery,
  selectCurrentPage,
} from "./popularPeopleSlice";
import { searchPeople } from "../../../common/Navigation/Search/getSearch";

function* fetchPopularPeopleHandler() {
  try {
    const page = yield select(selectPeoplePage);
    const currentPage = yield select(selectCurrentPage);
    const query = yield select(selectQuery);
    yield delay(1000)
    let data;
    if (query !== "") {
      data = yield call(searchPeople, { page: currentPage, query: query });
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