import { combineReducers } from 'redux';
import comics from './comics';
import characters from './characters';
import creators from './creators';

export default combineReducers({
  comics,
  characters,
  creators
});
