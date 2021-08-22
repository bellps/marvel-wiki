import React from 'react';
import { View } from 'react-native';
import { Creator } from '../../store/ducks/creators/types';
import { Text } from '@ui-kitten/components';


import { Container, Subtitle, Title, Image, Content } from './styles';

const CreatorPreview = ({ creator }: { creator: Creator }) => {
  const image = {
    uri: `${creator.thumbnail.path}/standard_large.${creator.thumbnail.extension}`,
  };

  return (
    <Container>
      <View>
        <Image source={image} />
      </View>
      <Content>
        <Text category='h5'>{creator.fullName}</Text>
        <Text category='s1'>{creator.suffix}</Text>
      </Content>
    </Container>
  );
};

export default CreatorPreview;
