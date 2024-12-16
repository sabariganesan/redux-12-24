import { all } from "redux-saga/effects";
import watcher from "./productsSaga";

function* rootSaga() {
  yield all([watcher()]);
}

export default rootSaga;
