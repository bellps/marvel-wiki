import { action } from 'typesafe-actions';
import { ComicsTypes, Comic } from './types';

export const loadAll = ({ limit = 10, offset = 5 }) =>
  action(ComicsTypes.LOAD_ALL, { limit, offset });

export const loadComic = ({ id }: any) => action(ComicsTypes.LOAD_COMIC, id);

export const loadSuccess = (data: Comic[]) =>
  action(ComicsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(ComicsTypes.LOAD_FAILURE);
