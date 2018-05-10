import React from 'react'
import Link from "gatsby-link"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { position, width, space, color,bg, textAlign, border, borderRadius, fontSize } from 'styled-system'

import './index.scss'
import Container from '../components/container'
import theme from '../utils/theme'
import Logo from '../pages/assets/logo.png'

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
      <Header width={1} className="header" pt={15}>
        <Container>
          <Flex alignItems="center">
            <Box width={5 / 12}>
              <Text textAlign="right" fontSize={14} style={{ textTransform: 'uppercase', display:'none' }} color="theme_ffffff" >
                <ul className="mainNav">
                  <li>
                    <Link exact to="./"
                    activeStyle={{
                      color: '#a6aa54'
                    }}
                  >Home</Link>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                </ul>
              </Text>
            </Box>
            <Box width={2 / 12}>
              <Text textAlign="center" fontSize={21}>
                <Link to="./">
                  <img src={Logo} style={{
                    maxWidth: `64px`
                  }}/>
                </Link>
              </Text>
            </Box>
            <Box width={5 / 12} >
              <Text textAlign="left" fontSize={14} style={{ textTransform: 'uppercase', display:'none' }} color="theme_ffffff" >
                <ul className="mainNav">
                  <li>
                    <a href="/works">Works</a>
                  </li>
                  <li>
                    <a href="/working-model">Model</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
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
