import styled from 'styled-components'

import { ReactComponent as Github } from '../../assets/SVG/SocialMedia/github.svg';
import { ReactComponent as Linkedin } from '../../assets/SVG/SocialMedia/linkedin.svg';


export const ContactContainer = styled.div`
    width: clamp(320px, 75%, 1100px);
    margin: 7rem auto 5rem auto;
    text-align: center;
    color: white;
    letter-spacing: 1px;

    h3 {
        font-size: ${props => props.theme.fontSize.fs400};
        width: fit-content;
        line-height: 1.2;
        margin: 0 auto 1rem auto;
        border-bottom: 2px solid hsl(${props => props.theme.colors.lightRed});
    }
`;

export const Email = styled.a`
    font-size: ${props => props.theme.fontSize.fs300};
    text-decoration: none;
    color: white;

    :hover {
        cursor: pointer;
        color: hsl(${props => props.theme.colors.lightRed});
    }
`;

export const SocialMedia = styled.div`
    max-width: 320px;
    margin: .5rem auto 0 auto;
`;

export const GithubSVG = styled(Github)`
    height: 45px;
    width: 45px;
    margin-right: 2rem;
    path {
        fill: white;
    }

    :hover {
        cursor: pointer;
        path {
            fill: hsl(${props => props.theme.colors.lightRed});
        }
    }
`;

export const LinkedinSVG = styled(Linkedin)`
    height: 45px;
    width: 45px;

    path {
        fill: white;
    }

    :hover {
        cursor: pointer;
        path {
            fill: hsl(${props => props.theme.colors.lightRed});
        }
    }
`;