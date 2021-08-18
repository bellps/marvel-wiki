import { all, call, put, takeEvery } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { CreatorsTypes } from './types';

export function* watchCreators(): any {
  return yield all([
    takeEvery(CreatorsTypes.LOAD_CREATOR, loadCreator),
    takeEvery(CreatorsTypes.LOAD_ALL, loadAll),
  ]);
}

function* loadAll({ payload: { limit } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'creators', { params: { limit } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}

function* loadCreator({ payload: { id } }: any) {
  try {
    const { data: { data: { data: total, results } = {} } = {} } =
      yield call(api.get, 'creators', { params: { id } });

    yield put(loadSuccess(results));
  } catch (err) {
    console.log(err);

    yield put(loadFailure());
  }
}
