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

const Footer = props => {
  const content = props.content

  return (
      <Flex className="section footer">
          <Container>
          <Box width={'100%'}>
            </Box>
          </Container>
      </Flex>
  )
}

export default Footer
