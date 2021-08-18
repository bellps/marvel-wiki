import { Image, ResourceList, Url } from "../defaultTypes";

export enum CharactersTypes {
  LOAD_ALL = '@characters/LOAD_ALL',
  LOAD_CHAR = '@characters/LOAD_CHAR',
  LOAD_SUCCESS = '@characters/LOAD_SUCCESS',
  LOAD_FAILURE = '@characters/LOAD_FAILURE'
}

export interface Character {
  id: number,
  name: string,
  description: string,
  thumbnail: Image,
  urls: Url[],
  creators: ResourceList,
  comics: ResourceList
}

export interface CharactersState {
  readonly data: Character[],
  readonly loading: boolean,
  readonly error: boolean
}