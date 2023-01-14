import React from 'react'

import { HashLink } from 'react-router-hash-link';

import { 
  Nav,
  HashLinkStyled,
  NavLink
 } from './Navigation.styled'

const Navigation: React.FC = () => {
  return (
    <>
      <Nav>
        <NavLink href={require('../../assets/Resume/Morgan_Bare_Resume_2023.pdf')} target = "_blank">RESUME</NavLink>
        <HashLinkStyled to="/#Projects">PROJECTS</HashLinkStyled>
        <HashLinkStyled to="/#Contact">CONTACT</HashLinkStyled>
      </Nav>
    </>
  )
}

export default Navigation
