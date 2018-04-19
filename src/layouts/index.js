import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { position, width, space, color,bg, textAlign, border, borderRadius, fontSize } from 'styled-system'

import './index.css'
import Container from '../components/container'
import theme from '../utils/theme'

const Header = styled.div`
  ${position}
  ${width};
  ${space}
`
const Text = styled.div`
  ${color}
  ${bg}
  ${space}
  ${textAlign}
  ${borderRadius}
  ${fontSize}
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ankit Sigdel || Front End Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <Header position="absolute" width={1} className="header" pt={15}>
        <Container>
          <Flex alignItems="center">
            <Box width={2 / 12}>
              <Text color="theme_bd9d3f" fontSize={40}>AS</Text>
            </Box>
            <Box width={8 / 12}>
              <Text color="theme_ffffff" textAlign="center">
                <ul className="mainNav">
                  <li>
                    <a href="/work">Work</a>
                  </li>
                  <li>
                    <a href="/working-model">Working Model</a>
                  </li>
                  <li>
                    <a href="/service">Service</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </Text>
            </Box>
            <Box width={2 / 12} >
              <Text color="theme_ffffff">
                <a href="" className="headerCta">Get In touch</a>
              </Text>
            </Box>
          </Flex>
        </Container>
      </Header>
    </ThemeProvider>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
