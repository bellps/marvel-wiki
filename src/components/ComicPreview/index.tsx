import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Comic } from '../../store/ducks/comics/types';

import { Container, Subtitle, Title, Image, Content } from './styles';

const ComicPreview = ({ comic }: { comic: Comic }) => {
  const image = {
    uri: `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`,
  };

  let creators = '';

  if (comic.creators.items.length != 0) {
    if (comic.creators.items.length == 1) {
      creators = comic.creators.items[0].name;
    } else {
      creators = `${comic.creators.items[0].name} and others`;
    }
  }

  const navigation = useNavigation();

  const goToResource = (comic: Comic) => {
    navigation.navigate('ComicDetails', { resource: comic });
  };

  return (
    <Pressable onPress={() => goToResource(comic)}>
      <Container>
        <View>
          <Image source={image} />
        </View>
        <Content>
          <Title>{comic.title}</Title>
          <Subtitle>{creators}</Subtitle>
        </Content>
      </Container>
    </Pressable>
  );
};

export default ComicPreview;
