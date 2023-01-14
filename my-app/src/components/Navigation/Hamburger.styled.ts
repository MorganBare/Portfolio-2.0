import styled from "styled-components";


export const StyledHamburger = styled.button<{ open: boolean }>`
position: fixed;
right: 3vw;
top: 3vw;
width: 2rem;
height: 2rem;
padding: 0;
background: ${({ open }) => (open ? "black" : "hsl(240, 5%, 11%)")};

display: flex;
flex-direction: column;
justify-content: space-around;
border: none;
cursor: pointer;
outline: none;
z-index: 1;

@media screen and (min-width: 600px) {
      display: none;
  }

div {
  position: relative;
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: white;
  transition: all 0.3s linear;
  transform-origin: 1px;

  :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
  :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)":"translateX(0)")};
      }
  :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
}
`;