import React from 'react'

import { 
    SingleProjectContainer,
    SingleProjectContent,
    Stack,
    Links} from './Projects.styled'

type Props = {
    title: string;
    stack: Array<string>;
    liveLink?: string;
    github: string;
    screenshot: string;
    };

function SingleProject({title, stack, liveLink, github, screenshot}: Props) {
  return (
    <SingleProjectContainer>
        <img src={require(`../../assets/Screenshots/${screenshot}`)} alt='project screenshot'/>
        <SingleProjectContent>
            <h3>{title}</h3>
            <Stack>
                <p>{stack}</p>
            </Stack>
            <Links>
                {liveLink ? <a href={liveLink}>Link to Project</a> : ''}
                <a href={github}>Link to Github</a>
            </Links>
        </SingleProjectContent>
    </SingleProjectContainer>
  )
}

export default SingleProject