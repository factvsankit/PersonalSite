import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import RecentWorkSlider from './recentworkslider'
import Container from '../components/container'

const RecentWorks = props => {
  const content = props.content

  return (
      <Flex className="section recent-works">
          <Container>
          <Box width={'100%'}>
            <div className="section-title">
              <h1>Recent Works</h1>
            </div>
            <div className="section-description">
              <p>
                Below are the series of my works which I was
                a part of. All the projects listed below are accomplished
                while I was working with different Organizations or doing
                freelancing in different times. I am nothing but proud to be
                part of those organizations and these projects.
              </p>
            </div>
            <div className="workCarousel">
              <RecentWorkSlider />
            </div>
            </Box>
          </Container>
      </Flex>
  )
}

export default RecentWorks
