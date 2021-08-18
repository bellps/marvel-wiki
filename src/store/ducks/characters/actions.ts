import { action } from 'typesafe-actions';

import { CharactersTypes, Character} from './types';

export const loadAll = ({ limit = 10 }) =>
  action(CharactersTypes.LOAD_ALL, { limit });

export const loadChar = ({ id }: any) => action(CharactersTypes.LOAD_CHAR, id);

export const loadSuccess = (data: Character[]) =>
  action(CharactersTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(CharactersTypes.LOAD_FAILURE);
