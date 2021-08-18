import React from 'react';
import { Container, Image } from './styles';

const TopLogo = () => {
  return <Container>
    <Image source={ require('../../assets/images/marvel.png') }/>
  </Container>;
}

export default TopLogo;