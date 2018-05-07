import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import Container from '../components/container'
import BackgroundUIImage from '../pages/assets/background-ui.png'

const BannerSection = props => {
  const content = props.content

  return (
      <Flex className="banner" style={{
        height: '400px',
        position: 'relative',
        backgroundColor:'#1fb8a6',
        // backgroundImage:'url('+`${BackgroundUIImage}`+')',
        backgroundPosition: 'top center',
        padding: '100px'
      }}>
          <Container>
            <div className="bannerContent">
               <div className="bannerCaption">
                <h1>Gatsby-React Developer</h1>
                <p>
                  Hello, I am Ankit Sigdel,
                  from the beautiful country of 'Himalayas', Nepal. I am a
                  full time Front End Developer, with the extensive
                  knowledge of Graphics Designing and Backend Development.
                </p>
              </div>
            </div>
          </Container>
      </Flex>
  )
}

export default BannerSection
