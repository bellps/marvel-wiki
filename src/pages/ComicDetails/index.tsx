import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Moment from 'moment';

import TopBav from '../../components/Topbar';
import {
  Container,
  ImageBackground,
  Row,
  Tag,
  Content,
  ComicTitle,
  ComicCreators,
  Subtitle,
  Description,
  Section,
  Image,
  Gallery,
} from './styles';
import { HomeStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { marginRight } from 'styled-system';

type DetailsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ComicDetails'
>;
type DetailsScreenRouteProp = RouteProp<HomeStackParamList, 'ComicDetails'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

export default function ComicDetails({ navigation, route }: Props) {
  Moment.locale('pt');
  const {
    thumbnail,
    title,
    description,
    creators,
    dates,
    prices,
    images,
    issueNumber,
  } = route.params.resource;
  const image = {
    uri: `${thumbnail.path}/detail.${thumbnail.extension}`,
  };

  let creatorsList = '';

  if (creators.returned != 0) {
    creators.items.map(function (creator: any, i: number) {
      creatorsList += `${creator.name}`;
      if (i != creators.returned - 1) {
        creatorsList += `, `;
      }
    });
  } else {
    creatorsList = 'unknown';
  }
  return (
    <Container>
      <ImageBackground source={image} resizeMode="contain">
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={styles.background}
        />
      </ImageBackground>
      <TopBav goBack={navigation.goBack} />
      <Content>
        <Section>
          <ComicTitle>{title}</ComicTitle>
          <ComicCreators>by {creatorsList}</ComicCreators>
        </Section>
        <Section>
          <Row horizontal>
            <Tag>
              <Text>Issue {issueNumber}</Text>
            </Tag>
            {dates?.map(function ({ type, date }, key) {
              if (type == 'onsaleDate') {
                return (
                  <Tag key={key}>
                    <Text>Sale date: {Moment(date).format('d/MM/YYYY')}</Text>
                  </Tag>
                );
              }
            })}
            {prices?.map(function ({ type, price }, key) {
              if (type == 'printPrice') {
                return (
                  <Tag key={key}>
                    <Text>Price: USD ${price}</Text>
                  </Tag>
                );
              }
            })}
          </Row>
        </Section>
        <Section>
          <Subtitle>Description</Subtitle>
          <Description>{description || '---'}</Description>
        </Section>
        <Section>
          <Subtitle>Gallery</Subtitle>
          <Gallery horizontal>
            {images?.map(function ({ path, extension }, key) {
              return (
                <Image key={key}
                  source={{
                    uri: `${path}/standard_fantastic.${extension}`,
                  }}
                />
              );
            })}
          </Gallery>
        </Section>
      </Content>
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
