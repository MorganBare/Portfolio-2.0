import React from 'react'
import styled from "styled-components";

const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  right: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  
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
    background-color: ${({ open }) =>
      open ? 'green' : 'purple'};

    :first-child {
      transform: ${({ open }) => (open ? 'rotatez(-45deg) translate(-9px,5px)' : 'rotatez(0)')};
        }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'translate(-1px, -11px) rotatez(45deg)' : 'rotatez(0)')};
        }
  }
`;

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
  };

const Hamburger = (props: Props) => {
  return (
        <StyledHamburger
        open={props.open}
        onClick={() => props.setOpen(!props.open)}>
            <div />
            <div />
            <div />
        </StyledHamburger>
  )
}

export default Hamburger;
