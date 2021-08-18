import { all } from 'redux-saga/effects';
import { watchCharacters } from './characters/sagas';
import { watchComics } from './comics/sagas';
import { watchCreators } from './creators/sagas';

export default function* rootSaga(): any {
  return yield all([watchComics(), watchCharacters(), watchCreators()]);
}
