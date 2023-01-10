import styled, { keyframes } from 'styled-components'

import { ReactComponent as TriangleSVG } from '../../assets/SVG/Triangle-2.0.svg';


export const HeroContainer = styled.div`
    width: clamp(320px, 80%, 1100px);
    height: 75vh;
    margin-top: 2rem;
    margin-inline: auto;
    margin-bottom: 10rem;
    padding: 1rem 1rem;
    position: relative;

    @media screen and (min-width: 375px){
        padding: 0; 
    }

    @media screen and (min-width: 760px) {
        width: clamp(320px, 73%, 1100px);
    }

    h1 {
        font-size: ${props => props.theme.fontSize.fs700};
        color: hsl(${props => props.theme.colors.lightRed});
        line-height: .6;
        padding-bottom: 1.6rem;
        white-space: nowrap;

        @media screen and (min-width: 600px) {
            line-height: .8;
            padding-bottom: .5rem;
        }
    }

    h2 {
        font-size: ${props => props.theme.fontSize.fs600};
        color: hsl(${props => props.theme.colors.red});

        @media screen and (min-width: 600px) {
            line-height: 1;
        }
    }

    p {
        font-size: ${props => props.theme.fontSize.fs300};
        color: white;
        line-height:1;

        @media screen and (min-width: 800px) {
            font-size: ${props => props.theme.fontSize.fs400};
        }
    }
`;

const FirstTraingleAnimation = keyframes`
    0%  { stroke: #950740; }
    50% { stroke: #950740; }
    55% { stroke: #950740; }
    75% { stroke: white; }
    85% { stroke: white; }
    100% { stroke: white; }
`;

const SecondTraingleAnimation = keyframes`
    0% { stroke: #C3073F; }
    25% { stroke: #C3073F; }
    40%  { stroke: white; }
    50%  { stroke: white; }
    55% { stroke: white; }
    60% { stroke: white; }
    75% { stroke: #C3073F; }
    100% { stroke: #C3073F }
`;

const ThirdTraingleAnimation = keyframes`
    0%   { stroke: #6F2232; }
    10% { stroke: white; }
    15% { stroke: white; }
    25% { stroke: white; }
    40% { stroke: #6F2232; }
    50% { stroke: #6F2232; }
    75% { stroke: #6F2232; }
    100% { stroke: #6F2232; }
`;

export const StyledTriangle = styled(TriangleSVG)`
    width: 320px;
    height: 320px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -65%);

    #first{
        animation: ${FirstTraingleAnimation} 4s steps(1, end) infinite both;
    }

    #second{
        animation: ${SecondTraingleAnimation} 4s steps(1, end) infinite both;
    }

    #third{
        animation:  ${ThirdTraingleAnimation} 4s steps(1, end) infinite both;
    }

    @media screen and (max-height: 800px) {
        transform: translate(-50%, -50%);
        height: 250px;
        width: 300px;
    }

    @media screen and (min-width: 560px) {
        transform: translate(-50%, -50%);
    }

`;
