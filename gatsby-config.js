require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'deverell.com',
    siteUrl: 'https://deverell.com',
    description: 'The website of William Deverell',
  },
  plugins: [
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'g2f5nmlg',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-Z1X8VWYK7K'],
      },
    },
  ],
};
