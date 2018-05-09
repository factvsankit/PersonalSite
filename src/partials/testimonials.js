import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import TestimonialSlider from './testimonialsSlider'
import Container from '../components/container'

const Testimonials = props => {
  const content = props.content

  return (
      <Flex className="section testimonials">
          <Container>
          <Box width={'100%'}>
            <div className="section-title">
              <h1>Testimonials</h1>
            </div>
            <div className="section-description">
              <p>
                I have worked with clients from more than 15 countries, and
                they said great words about me, which help me grow myself and
                help me stay focused at my work.
              </p>
            </div>
            <div className="testimonialCarousel">
              <TestimonialSlider />
            </div>
            </Box>
          </Container>
      </Flex>
  )
}

export default Testimonials
