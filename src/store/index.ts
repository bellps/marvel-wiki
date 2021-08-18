import { createStore, applyMiddleware, Store } from 'redux';
import rootSaga from './ducks/rootSaga';

import { ComicsState } from './ducks/comics/types';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './ducks/rootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CreatorsState } from './ducks/creators/types';

export interface ApplicationState {
  comics: ComicsState;
  creators: CreatorsState
}

// redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// saga
const sagaMiddleware = createSagaMiddleware();

// store
const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
