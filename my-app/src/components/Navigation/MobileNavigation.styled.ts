import styled from 'styled-components'

import { HashLink } from 'react-router-hash-link';

export const StyledMobileNav = styled.nav<{ open: boolean }>`
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    position: fixed;
    background-color: black;
    z-index: 1;
    padding: 10rem 0;
    flex-direction: column;
    display: flex;
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0%)" :"translateX(100%)")};
    @media screen and (min-width: 600px) {
        display: none;
    }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: ${props => props.theme.fontSize.fs300};
  color: white;
  text-decoration: none;
  
  :hover {
    color: hsl(${props => props.theme.colors.lightRed});
    cursor: pointer;
  }
`;

export const HashLinkStyled = styled(HashLink)`
  padding: 0 2rem;
  font-size: ${props => props.theme.fontSize.fs300};
  color: white;
  text-decoration: none;
  
  :hover {
    color: hsl(${props => props.theme.colors.lightRed});
    cursor: pointer;
  }
`;