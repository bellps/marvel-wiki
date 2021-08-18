import { Image, ResourceList } from "../defaultTypes";

export enum CreatorsTypes {
  LOAD_ALL = '@creators/LOAD_ALL',
  LOAD_CREATOR = '@creators/LOAD_CREATOR',
  LOAD_SUCCESS = '@creators/LOAD_SUCCESS',
  LOAD_FAILURE = '@creators/LOAD_FAILURE'
}

export interface Creator {
  id: number,
  fullName: string,
  suffix: string,
  thumbnail: Image,
  comics: ResourceList,
  characters: ResourceList
}

export interface CreatorsState {
  readonly data: Creator[],
  readonly loading: boolean,
  readonly error: boolean
}