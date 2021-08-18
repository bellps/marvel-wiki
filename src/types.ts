import { NavigatorScreenParams } from '@react-navigation/native';
import { Comic } from './store/ducks/comics/types';
import { Creator } from './store/ducks/creators/types';

type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Search: NavigatorScreenParams<SearchStackParamList>;
  Settings: any | undefined;
};

type HomeStackParamList = {
  Home: undefined;
  ComicDetails: { resource: Comic};
};

type SearchStackParamList = {
  Search: undefined;
  ComicDetails: { resource: Comic };
};

export { TabParamList, HomeStackParamList, SearchStackParamList }