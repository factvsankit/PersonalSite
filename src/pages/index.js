import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../utils/theme'
import BannerSection from '../partials/banner'
import AboutSection from '../partials/about'
import RecentWorks from '../partials/recentworks'
import BannerImage from './assets/banner.jpg'

const BannerContent = {
  bannerImage: `${BannerImage}`,
  bannerTitle: 'Ankit Sigdel',
  bannerDescription: "Front End Web Developer",
}

const IndexPage = () => {
  return (
    <div>
      <BannerSection content={BannerContent} />
      <AboutSection />
      <RecentWorks />
    </div>
  )
}

export default IndexPage
