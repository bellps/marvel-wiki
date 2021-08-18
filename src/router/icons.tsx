import * as React from 'react';
import { Icon, IconProps } from '@ui-kitten/components';

const HomeIcon = (props: IconProps) => (
  <Icon {...props} name='home-outline'/>
);

const SearchIcon = (props: IconProps) => (
  <Icon {...props} name='search'/>
);

const SettingsIcon = (props: IconProps) => (
  <Icon {...props} name='settings-2-outline'/>
);

export { HomeIcon, SearchIcon, SettingsIcon }
