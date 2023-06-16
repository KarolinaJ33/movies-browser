import { call } from "redux-saga/effects";
import { getPerson } from "./getPersonApi";

export const popularPeopleSaga = () => {
    const details = yield call(getPerson, { personId: personId });
};