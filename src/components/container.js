import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'

const Container = styled(Box)`
  width: 100%;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
Container.defaultProps = {
  mx: 'auto',
  px: '15px',
}
export default Container
