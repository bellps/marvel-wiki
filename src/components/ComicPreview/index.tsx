import { useNavigation } from '@react-navigation/native';
import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Comic } from '../../store/ducks/comics/types';

import { Container, Subtitle, Title, Image, Content } from './styles';
import { Text } from '@ui-kitten/components';

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
    <Layout>
      <Pressable onPress={() => goToResource(comic)}>
        <Container>
          <View>
            <Image source={image} />
          </View>
          <Content>
            <Text category='h5'>{comic.title}</Text>
            <Text category='s1'>{creators}</Text>
          </Content>
        </Container>
      </Pressable>
    </Layout>
  );
};

export default ComicPreview;
