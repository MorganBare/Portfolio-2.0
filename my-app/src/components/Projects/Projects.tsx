import React from 'react'

import { ProjectData } from '../../assets/ProjectData/ProjectData'

import { ProjectsContainer } from './Projects.styled'

import SingleProject from './SingleProject'

const Projects = () => {


  return (
        <ProjectsContainer id='Projects'>
            {ProjectData.map(item => (
                <SingleProject
                key={item.id} 
                id={item.id}
                title={item.title}
                stack={item.stack}
                liveLink={item.liveLink}
                github={item.github}
                screenshot={item.screenshot}/>
            ))}
        </ProjectsContainer>
  )
}

export default Projects