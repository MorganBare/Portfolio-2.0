import styled, { keyframes } from 'styled-components'

import { ReactComponent as TriangleSVG } from '../../assets/SVG/Triangle-2.0.svg';


export const HeroContainer = styled.div`
    width: 500px;
    height: 500px;
    margin: 0 auto;
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
    margin: 0 auto;

    #first{
        animation: ${FirstTraingleAnimation} 4s steps(1, end) infinite both;
    }

    #second{
        animation: ${SecondTraingleAnimation} 4s steps(1, end) infinite both;
    }

    #third{
        animation:  ${ThirdTraingleAnimation} 4s steps(1, end) infinite both;
    }

`;
