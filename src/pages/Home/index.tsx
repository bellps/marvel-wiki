import React, { useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { View } from 'react-native';
import { Container, Title, Content } from './styles';
import { HomeStackParamList } from '../../types';

import { Text, Spinner } from '@ui-kitten/components';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { Comic } from '../../store/ducks/comics/types';
import * as ComicsActions from '../../store/ducks/comics/actions';
import * as CreatorsActions from '../../store/ducks/creators/actions';
import TopLogo from '../../components/TopLogo';
import { Creator } from '../../store/ducks/creators/types';
import { sample } from 'lodash';
import Slider from '../../components/Slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import ComicPreview from '../../components/ComicPreview';
import CreatorPreview from '../../components/CreatorPreview';
import { ThemeContext } from '../../theme-context';
import { Layout } from '@ui-kitten/components';

export type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;
export type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type carouselItem = {
  title: string;
  resource: Comic | Creator;
  link: HomeScreenNavigationProp;
  type: string;
};

export default function Home({ navigation }: Props) {
  const themeContext = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  // const teste = Math.random() * (100 - 1) + 1; pro offset aleatorio

  useEffect(() => {
    dispatch(ComicsActions.loadAll({ limit: 5, offset: 20 }));
    dispatch(CreatorsActions.loadAll({ limit: 5, offset: 30 }));
  }, []);

  const { data: comics, loading: loadingComics } = useSelector(
    (state: ApplicationState) => state.comics
  );

  const { data: creators, loading: loadingCreators } = useSelector(
    (state: ApplicationState) => state.creators
  );

  const carouselItems: carouselItem[] = [];

  if (!(loadingCreators && loadingComics)) {
    carouselItems.push(
      {
        title: 'Random comic',
        resource: sample(comics),
        link: navigation,
        type: 'Comic',
      },
      {
        title: 'Random creator',
        resource: sample(creators),
        link: navigation,
        type: 'Creator',
      }
    );
  }

  const renderLoading = () => (
    <View>
      <Spinner />
    </View>
  );

  const renderData = () => (
    <Layout>
      <Container>
        <SafeAreaView>
          <TopLogo />
          <Slider itens={carouselItems} />
          <Content>
            <Text category='h4'>Last comics</Text>
            {comics.map((comic: Comic) => (
              <ComicPreview key={comic.id} comic={comic} />
            ))}
            <Text category='h4'>Cool people</Text>
            {creators.map((creator: Creator) => (
              <CreatorPreview key={creator.id} creator={creator} />
            ))}
          </Content>
        </SafeAreaView>
      </Container>
    </Layout>
  );

  return loadingComics && loadingCreators && carouselItems.length === 0
    ? renderLoading()
    : renderData();
}
