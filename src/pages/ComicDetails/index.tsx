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
import { Layout, Text as UIText } from '@ui-kitten/components';

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
    characters
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
    <Layout>
      <Container>
        <ImageBackground source={image} resizeMode="contain">
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.5)', 'transparent']}
            style={styles.background}
          />
        </ImageBackground>
        <TopBav goBack={navigation.goBack} />
        <Content>
          <Section>
            <UIText category='h4'>{title}</UIText>
            <UIText category='s1'>by {creatorsList}</UIText>
          </Section>
          <Section>
            <Row horizontal>
              <Tag>
                <UIText category='c2'>Issue {issueNumber}</UIText>
              </Tag>
              {dates?.map(function ({ type, date }, key) {
                if (type == 'onsaleDate') {
                  return (
                    <Tag key={key}>
                      <UIText category='c2'>Sale date: {Moment(date).format('d/MM/YYYY')}</UIText>
                    </Tag>
                  );
                }
              })}
              {prices?.map(function ({ type, price }, key) {
                if (type == 'printPrice') {
                  return (
                    <Tag key={key}>
                      <UIText category='c2'>Price: USD ${price}</UIText>
                    </Tag>
                  );
                }
              })}
            </Row>
          </Section>
          <Section>
            <UIText category='h6'>Description</UIText>
            <UIText category='p2'>{description || '---'}</UIText>
          </Section>
          <Section>
            <UIText category='h6'>Gallery</UIText>
            <Gallery horizontal>
              {images?.map(function ({ path, extension }, key) {
                return (
                  <Image
                    key={key}
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
    </Layout>
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
