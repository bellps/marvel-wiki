import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
  
`;

export const Card = styled.ImageBackground`
  height: 200px;
  width: 340px;
  justify-content: flex-end;
  border-radius: 16px;
  overflow: hidden;
  margin-right: -25px;
  margin-left: -25px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding: 12px;
  color: white;
`;

export const Overlay = styled.View`
  background: rgb(6,5,5);
`;

