import {call, put, all, takeLatest} from "redux-saga/effects";

import {api} from "~/services/api";

import {MoviesTypes} from "./types";

import {getListMoviesRequest, getListMoviesSuccess, getListMoviesFailure} from "./actions";

function* getListMovies({payload}: ReturnType<typeof getListMoviesRequest>) {
  try {
    const response = yield call(api.get, "/movies");

    yield put(getListMoviesSuccess(response.data));
  } catch (error) {
    yield put(getListMoviesFailure());
  }
}

export default all([
  takeLatest(MoviesTypes.GET_LIST_MOVIES_REQUEST, getListMovies),
]);
