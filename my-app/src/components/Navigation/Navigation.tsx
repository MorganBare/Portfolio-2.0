import React from 'react'

import { 
  Nav,
  NavLink
 } from './Navigation.styled'

const Navigation: React.FC = () => {
  return (
    <>
      <Nav>
        <li><NavLink href={require('../../assets/Resume/Morgan_Bare_Resume_2023.pdf')} target = "_blank">RESUME</NavLink></li>
        <li><NavLink>PROJECTS</NavLink></li>
        <li><NavLink>CONTACT</NavLink></li>
      </Nav>
    </>
  )
}

export default Navigation
