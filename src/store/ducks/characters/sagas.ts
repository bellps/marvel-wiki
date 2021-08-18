import { all, call, put, takeEvery } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { CharactersTypes } from './types';

export function* watchCharacters(): any {
  return yield all([
    takeEvery(CharactersTypes.LOAD_CHAR, loadChar),
    takeEvery(CharactersTypes.LOAD_ALL, loadAll),
  ]);
}

function* loadAll({ payload: { limit } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'characters', { params: { limit } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}

function* loadChar({ payload: { id } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'characters', { params: { id } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}
