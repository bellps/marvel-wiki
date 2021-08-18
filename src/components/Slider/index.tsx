import React from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';

import { Comic } from '../../store/ducks/comics/types';
import { Creator } from '../../store/ducks/creators/types';
import { Container, Card, Title } from './styles';
import { HomeScreenNavigationProp } from '../../pages/Home';

interface CarouselItem {
  title: string;
  resource: Comic | Creator;
  link: HomeScreenNavigationProp;
  type: string;
}

const renderItem = ({ item }: { item: CarouselItem }) => {
  const {
    title,
    resource: { thumbnail },
  } = item;
  const image = {
    uri: `${thumbnail.path}/landscape_large.${thumbnail.extension}`,
  };

  return (
    <Pressable onPress={() => goToResource(item)}>
      <Card source={image} resizeMode="cover">
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.background}
        />
        <Title>{title}</Title>
      </Card>
    </Pressable>
  );
};

const goToResource = ({ type, link, resource }: CarouselItem) => {
  switch (type) {
    case 'Comic':
      link.navigate('ComicDetails', { resource: resource });
      break;
    case 'Creator':
      //link.navigate('ComicDetails', { resource: resource });
      break;
  }
};

export default function Slider({ itens }: { itens: CarouselItem[] }) {
  const windowWidth = useWindowDimensions().width;

  return (
    <Container>
      <Carousel
        layout={'default'}
        data={itens}
        sliderWidth={windowWidth}
        itemWidth={340}
        renderItem={renderItem}
        loop={true}
        initialNumToRender={3}
        windowSize={3}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
});
