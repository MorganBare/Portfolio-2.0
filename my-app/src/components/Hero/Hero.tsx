import React from 'react'

import { 
  HeroContainer,
  StyledTriangle,
 } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <h2>Hello.</h2>
      <h1>I'm Morgan.</h1>
      <p>Front-end developer based in Wiesbaden, Germany.</p>
      <StyledTriangle/>
    </HeroContainer>
  )
}

export default Hero;