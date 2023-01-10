import React from 'react'

import { 
  HeroContainer,
  StyledTriangle,
  HeroContent
 } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h2>Hello.</h2>
        <h1>I'm Morgan.</h1>
        <p>Front-end developer based in Wiesbaden, Germany.</p>
      </HeroContent>
      <StyledTriangle/>
    </HeroContainer>
  )
}

export default Hero;