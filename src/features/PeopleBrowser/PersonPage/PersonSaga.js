import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { getPerson, getPersonCredits } from "./getPersonApi";
import {
  selectPersonId, 
  getPersonId, 
  fetchPersonDetailsError, 
  fetchPersonDetailsSuccess
} from "./PersonSlice";

function* fetchPersonDetailsHandler() {
  try {
    yield delay(1000);
    const personId = yield select(selectPersonId);
    const details = yield call(getPerson, { personId: personId });
    const credits = yield call(getPersonCredits, { personId: personId });

    console.log("fetchPersonDetailsSuccess:", details, credits);

    yield put(fetchPersonDetailsSuccess({ details, credits }));
  } catch (error) {
    console.log("fetchPersonDetailsError:", error);

    yield put(fetchPersonDetailsError());
  }
}


export function* personDetailsSaga() {
  yield takeLatest(getPersonId.type, fetchPersonDetailsHandler);
}