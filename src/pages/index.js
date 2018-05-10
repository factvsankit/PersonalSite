import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../utils/theme'
import BannerSection from '../partials/banner'
import AboutSection from '../partials/about'
import RecentWorks from '../partials/recentworks'
import Testimonials from '../partials/testimonials'
import Footer from '../partials/footer'
import CopyRight from '../partials/copyright'

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
      <Testimonials />
      <Footer />
      <CopyRight />
    </div>
  )
}

export default IndexPage
