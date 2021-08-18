import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, ComicDetails } from '../../pages';

import { HomeStackParamList } from '../../types'

const HomeStack = createStackNavigator<HomeStackParamList>();

export default () => (
  <HomeStack.Navigator initialRouteName="Home" headerMode="none">
    <HomeStack.Screen name="Home" component={Home}/>
    <HomeStack.Screen name="ComicDetails" component={ComicDetails} />
  </HomeStack.Navigator>
);