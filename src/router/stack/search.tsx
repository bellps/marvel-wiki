import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Search, ComicDetails } from '../../pages';
import { SearchStackParamList } from '../../types'

const SearchStack = createStackNavigator<SearchStackParamList>();

export default () => (
  <SearchStack.Navigator initialRouteName="Search" headerMode="none">
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="ComicDetails" component={ComicDetails} />
  </SearchStack.Navigator>
);