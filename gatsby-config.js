module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     baseUrl: 'manage.netprophets.com.au',
    //     protocol: 'https',
    //     hostingWPCOM: false,
    //     verboseOutput: true,
    //     useACF: true,
    //   },
    // },
    'gatsby-plugin-purify-css',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          // require('autoprefixer')(),
          // require('postcss-loader')(),
          // require('postcss')(),
          // require('css-loader')
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/pages/assets/logo.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
