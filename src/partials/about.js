import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import Container from '../components/container'

import GDIcon from '../pages/assets/gd-icon.png'
import FDIcon from '../pages/assets/fd-icon.png'
import BDIcon from '../pages/assets/bd-icon.png'

const AboutSection = props => {

  return (
      <Flex
        className="section section-about"
      >
          <div className="mytable">
            <div className="table-cell va-middle">
              <Container>
                <div  className="section-title">
                  <h1>
                    About Me
                    <span> About Me</span>
                  </h1>
                </div>
                <div className="section-description">
                  <p>
                    Hello, I am Ankit Sigdel, from the beautiful country of 'Himalayas', Nepal.
                    I am a full time Front End Freelancer, with the extensive knowledge of Graphics Designing and Backend Development.
                  </p>
                </div>
                <Flex className="about-overview" ml={-15} mr={-15}>
                  <Box width={1/3} pl={15} pr={15}>
                    <div className="ao-feature">
                        <img src={GDIcon} />
                        <h2>GRAPHICS <br/>DESIGN</h2>
                        <p>
                          I am able to cater every possible ideas in terms of drawing a quality picture of an organizations
                          business and there unique exposure to the competitive market.
                        </p>
                    </div>
                  </Box>
                  <Box width={1/3} pl={15} pr={15}>
                    <div className="ao-feature">
                        <img src={FDIcon} />
                        <h2>FRONTEND DEVELOPMENT</h2>
                        <p>
                          I possess wild compassion of developing Pixel Perfect front end development. I write efficient and precise code, meet all the standard of front end programming.
                        </p>
                    </div>
                  </Box>
                  <Box width={1/3} pl={15} pr={15}>
                    <div className="ao-feature">
                        <img src={BDIcon} />
                        <h2>BACKEND DEVELOPMENT</h2>
                        <p>
                          I have got extensive knowledge of backend development, whether it be a Built in CMS like Wordpress or building bespoke CMS using PHP and its framework.
                        </p>
                    </div>
                  </Box>
                </Flex>
              </Container>
            </div>
          </div>
      </Flex>
  )
}

export default AboutSection
