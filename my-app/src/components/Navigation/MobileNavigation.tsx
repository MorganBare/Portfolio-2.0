import { useRef } from 'react'
import { useOnClickOutside } from '../../Hooks';
import Hamburger from './Hamburger';

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

  return (
    <div ref={node}>
      <StyledMobileNav open={props.open}>
          <StyledLink onClick={() => props.setOpen(false)}>RESUME</StyledLink>
          <StyledLink onClick={() => props.setOpen(false)}>PROJECTS</StyledLink>
          <StyledLink onClick={() => props.setOpen(false)}>CONTACT</StyledLink>
      </StyledMobileNav>
      <Hamburger open={props.open} setOpen={props.setOpen}/>
    </div>
  )
}

export default MobileNavigation;

