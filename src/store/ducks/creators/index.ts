import { CreatorsState, CreatorsTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: CreatorsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CreatorsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CreatorsTypes.LOAD_ALL:
      return { ...state, loading: true };
    case CreatorsTypes.LOAD_CREATOR:
      return { ...state, loading: true };
    case CreatorsTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };
    case CreatorsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;