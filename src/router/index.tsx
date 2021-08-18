import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import { HomeIcon, SearchIcon, SettingsIcon } from './icons'
import { HomeStack, SearchStack } from './stack'
import { Settings } from '../pages';
import { TabParamList } from '../types'

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home' icon={HomeIcon}/>
    <BottomNavigationTab title='Search' icon={SearchIcon}/>
    <BottomNavigationTab title='Settings' icon={SettingsIcon} />
  </BottomNavigation>
);

export default () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName='Home'>
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Search' component={SearchStack} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);