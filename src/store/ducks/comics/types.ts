import { Image, ResourceList } from "../defaultTypes";

export enum ComicsTypes {
  LOAD_ALL = '@comics/LOAD_ALL',
  LOAD_COMIC = '@comics/LOAD_COMIC',
  LOAD_SUCCESS = '@comics/LOAD_SUCCESS',
  LOAD_FAILURE = '@comics/LOAD_FAILURE'
}

interface ComicDate {
  type: string,
  date: Date
}

interface ComicPrice {
  type: string,
  price: number
}
export interface Comic {
  id: number,
  title: string,
  issueNumber: number,
  description: string,
  dates: ComicDate[],
  prices: ComicPrice[],
  thumbnail: Image,
  images: Image[],
  creators: ResourceList,
  characters: ResourceList
}

export interface ComicsState {
  readonly data: Comic[],
  readonly loading: boolean,
  readonly error: boolean
}