import { action } from 'typesafe-actions';
import { CreatorsTypes, Creator } from './types';

export const loadAll = ({ limit = 10 }) =>
  action(CreatorsTypes.LOAD_ALL, { limit });

export const loadCreator = ({ id }: any) => action(CreatorsTypes.LOAD_CREATOR, id);

export const loadSuccess = (data: Creator[]) =>
  action(CreatorsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(CreatorsTypes.LOAD_FAILURE);
