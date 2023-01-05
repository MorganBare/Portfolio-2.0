import styled from 'styled-components'

export const StyledMobileNav = styled.nav<{ open: boolean }>`
    top: 0;
    right: 0;
    height: 100vh;
    width: 35vw;
    position: fixed;
    background-color: blue;
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
  font-size: 2rem;
  color: yellow;
  text-decoration: none;
  
  :hover {
    color: red;
    cursor: pointer;
  }
`;