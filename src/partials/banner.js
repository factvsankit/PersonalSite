import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  height
} from 'styled-system'
import { Flex, Box } from 'grid-styled'
import Container from '../components/container'

const BannerSection = props => {
  const content = props.content

  return (
      <Flex
        style={{
          backgroundImage: `url(${content.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="banner"
      >
          <div className="mytable">
            <div className="table-cell va-middle">
              <Container>
                <div  className="bannerContent">
                  <h1>{content.bannerTitle}</h1>
                  <h2>{content.bannerDescription}</h2>
                </div>
              </Container>
            </div>
          </div>
      </Flex>
  )
}

export default BannerSection
