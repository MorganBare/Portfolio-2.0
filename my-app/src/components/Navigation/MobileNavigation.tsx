import React, { useRef } from 'react'
import { useOnClickOutside } from '../../Hooks/Hooks';
import Hamburger from './Hamburger';
import { useScrollBlock } from '../../Hooks/useScrollBlock';


import { 
    StyledMobileNav,
    StyledLink,
     } from './MobileNavigation.styled';

export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
  };


const MobileNavigation = (props: Props) => {

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => props.setOpen(false));

  const [blockScroll, allowScroll] = useScrollBlock();

  props.open ? blockScroll() : allowScroll();

  return (
    <div ref={node}>
      <StyledMobileNav open={props.open}>
          <StyledLink onClick={() => props.setOpen(false)} href={require('../../assets/Resume/Morgan_Bare_Resume_2023.pdf')} target = "_blank">RESUME</StyledLink>
          <StyledLink onClick={() => props.setOpen(false)}>PROJECTS</StyledLink>
          <StyledLink onClick={() => props.setOpen(false)}>CONTACT</StyledLink>
      </StyledMobileNav>
      <Hamburger open={props.open} setOpen={props.setOpen}/>
    </div>
  )
}

export default MobileNavigation;

