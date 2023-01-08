import React from 'react'

import Hamburger from './Hamburger';

import { 
    StyledMobileNav,
    StyledLink,
     } from './MobileNavigation.styled';

const MobileNavigation: React.FC = () => {

    const [open, setOpen] = React.useState<boolean>(false);
    const close = () => setOpen(false);

  return (
    <>
        <StyledMobileNav open={open}>
            <StyledLink onClick={() => close()}>RESUME</StyledLink>
            <StyledLink onClick={() => close()}>PROJECTS</StyledLink>
            <StyledLink onClick={() => close()}>CONTACT</StyledLink>
        </StyledMobileNav>
        <Hamburger open={open} setOpen={setOpen}/>
    </>
  )
}

export default MobileNavigation;

