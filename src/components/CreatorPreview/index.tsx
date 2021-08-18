import React from 'react';
import { View } from 'react-native';
import { Creator } from '../../store/ducks/creators/types';

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
        <Title>{creator.fullName}</Title>
        <Subtitle>{creator.suffix}</Subtitle>
      </Content>
    </Container>
  );
};

export default CreatorPreview;
