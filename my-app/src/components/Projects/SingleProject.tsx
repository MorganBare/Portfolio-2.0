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

    const stackItems = stack.map(item => <span>{item}</span>)
    console.log(stackItems)

  return (
    <SingleProjectContainer>
        <img src={require(`../../assets/Screenshots/${screenshot}`)} alt='project screenshot'/>
        <SingleProjectContent>
            <h3>{title}</h3>
            <Stack>
                {stackItems}
            </Stack>
            <Links>
                <a href={github}>View Code</a>
                {liveLink ? <a href={liveLink}>View Project</a> : ''}
            </Links>
        </SingleProjectContent>
    </SingleProjectContainer>
  )
}

export default SingleProject