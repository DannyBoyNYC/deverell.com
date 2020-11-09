require('dotenv').config({
  path: '.env',
});

// logs to terminal
console.log('proj id config :::  ', process.env.SANITY_PROJECT_ID);

module.exports = {
  siteMetadata: {
    title: 'deverell.com',
    siteUrl: 'https://deverell.com',
    description: 'The website of William Deverell',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
