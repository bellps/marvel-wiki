import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { Button, Text } from 'react-native';
import { Container } from './styles';
import { SearchStackParamList } from '../../types'

type SearchScreenNavigationProp = StackNavigationProp<SearchStackParamList, 'Search'>;
type SearchScreenRouteProp = RouteProp<SearchStackParamList, 'Search'>;

type Props = {
  navigation: SearchScreenNavigationProp;
  route: SearchScreenRouteProp;
};

export default function Search({ navigation }: Props) {
  return (
    <Container>
      <Text>EM OBRAS</Text>
    </Container>
  );
}
