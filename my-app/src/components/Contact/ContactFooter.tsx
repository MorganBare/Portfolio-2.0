import React from 'react'

import { 
  ContactContainer,
  SocialMedia,
  GithubSVG,
  LinkedinSVG,
  Email
 } from './ContactFooter.styled'

const ContactFooter: React.FC = () => {
  return (
    <ContactContainer id="Contact">
      <h3>CONTACT ME</h3>
      <Email href = "mailto: morganjbare@gmail.com">MORGANJBARE@GMAIL.COM</Email>
      <SocialMedia>
        <a href='https://github.com/MorganBare'><GithubSVG/></a>
        <a href='https://www.linkedin.com/in/morgan-bare/'><LinkedinSVG/></a>
      </SocialMedia>
    </ContactContainer>
  )
}

export default ContactFooter