import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  
`;

export const ImageBackground = styled.ImageBackground`
  height: 617px;
  background-color: ${props => props.theme['color-basic-900']};
`;

export const Row = styled.ScrollView`
  border-bottom-width: 1px;
  padding: 12px 0;
  border-bottom-color: ${props => props.theme['color-basic-700']};
  border-top-width: 1px;
  border-top-color: ${props => props.theme['color-basic-700']};
`;

export const Tag = styled.View`
  padding: 5px 15px;
  margin: 0 5px;
  background-color: ${props => props.theme['color-primary-500']};
  color: #F5F5F5;
  border-radius: 16px;
`;

export const Content = styled.View`
  padding: 12px;
`;

export const ComicTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

export const ComicCreators = styled.Text`
  font-weight: 300;
  font-size: 18px;
  font-style: italic;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  text-align: justify;
`;

export const Section = styled.View`
  margin-bottom: 18px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  margin-right: 12px;
`;

export const Gallery = styled.ScrollView`
`;