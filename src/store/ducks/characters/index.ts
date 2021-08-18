import { CharactersState, CharactersTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: CharactersState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.LOAD_ALL:
      return { ...state, loading: true };
    case CharactersTypes.LOAD_CHAR:
      return { ...state, loading: true };
    case CharactersTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case CharactersTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;