import React from 'react'
import styled from 'styled-components'
var FontAwesome = require('react-fontawesome');
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import Container from '../components/container'

const CopyRight = props => {
  const content = props.content

  return (
      <Flex className="copyright">
          <Container>
          <Box width={'100%'}>
            Ankit Sigdel. All Right Preserved. &copy; 2018
            <br />
            <a href="mailto:mta.ankit@gmail.com" style={{
              color: '#a6aa54'
            }}>mta.ankit@gmail.com</a>
            </Box>
          </Container>
      </Flex>
  )
}

export default CopyRight
