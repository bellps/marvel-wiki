import { ComicsState, ComicsTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: ComicsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ComicsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ComicsTypes.LOAD_ALL:
      return { ...state, loading: true };
    case ComicsTypes.LOAD_COMIC:
      return { ...state, loading: true };
    case ComicsTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case ComicsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
