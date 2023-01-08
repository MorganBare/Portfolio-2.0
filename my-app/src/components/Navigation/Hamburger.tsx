import { StyledHamburger } from './Hamburger.styled';


export type Props = {
  open: boolean;
  setOpen: Function;
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
