import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    justify-items: center;
    color: white;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;

    @media screen and (min-width: 850px) {
        padding: 0;
    }
`;

export const SingleProjectContainer = styled.div`

    min-width: 320px;
    max-width: 400px;

    img {
        width: 100%;
        height: 300px;
        padding-bottom: 1rem;
        
    }

    h3 {
        font-size: ${props => props.theme.fontSize.fs300};
        letter-spacing: 2px;
        line-height: 1;
    }
`;

export const SingleProjectContent = styled.div``;

export const Stack = styled.div`

    padding-top: 0.5rem;

    span{
        font-size: ${props => props.theme.fontSize.fs100};
        color: hsl(${props => props.theme.colors.gray});
        letter-spacing: 1px; 
        padding-right: 10px;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: left;
    gap: 2rem;
    color: white;
    padding-top: 1rem;
    font-size: ${props => props.theme.fontSize.fs200};
    a{
        text-decoration: none;
        letter-spacing: 1px;
        border-bottom: 2px solid hsl(${props => props.theme.colors.lightRed});

        :visited,
        :link {
            color: white;
        }

        :hover {
            border-bottom: 2px solid white;
            color: hsl(${props => props.theme.colors.lightRed});
        }
    }
`;
