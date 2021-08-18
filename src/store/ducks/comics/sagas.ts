import { all, call, put, takeEvery } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { ComicsTypes } from './types';

export function* watchComics(): any {
  return yield all([
    takeEvery(ComicsTypes.LOAD_COMIC, loadComic),
    takeEvery(ComicsTypes.LOAD_ALL, loadAll),
  ]);
}

function* loadAll({ payload: { limit, offset } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'comics', { params: { limit, offset } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}

function* loadComic({ payload: { id } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'comics', { params: { id } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}
