import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

export const Nav = styled.nav`
    width: clamp(600px, 75%, 1100px);
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const HashLinkStyled = styled(HashLink)`
    font-size: ${props => props.theme.fontSize.fs200};
    color: white;
    text-decoration: none;

    :hover{
        cursor: pointer;
        color: hsl(${props => props.theme.colors.lightRed});
        transition: color 0.2s ease-in-out;
    }
`;

export const NavLink = styled.a`
    font-size: ${props => props.theme.fontSize.fs200};
    color: white;
    text-decoration: none;

    :hover{
        cursor: pointer;
        color: hsl(${props => props.theme.colors.lightRed});
        transition: color 0.2s ease-in-out;
    }
`;