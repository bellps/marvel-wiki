import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme['color-basic-700']};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Content = styled.View`
  display: flex;
  align-self: center;
  padding-left: 12px;
`;
