// import dotenv from 'dotenv'
// dotenv.config = ({
//   path: '.env'
// })
require("dotenv").config({
  path: '.env',
})
// console.log(' ', process.env.SANITY_TOKEN)

module.exports = {
  siteMetadata: {
    title: 'deverell.com',
    siteUrl: 'https://deverell.com',
    description: 'The website of William Deverell',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'g2f5nmlg',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }
  ]
}