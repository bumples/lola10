require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Bumples Books`,
    description: `Kids books and gifts for 4-10`,
    author: `@bumples`,
  },
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400`,
          'open sans:400i',
          `open sans\:700`,
          'open sans:700i',
          `open sans\:800`,
          'open sans:800i',
        ],
      },
    },

    {
       resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-10',
        },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
       
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Bumples.png`,
      },
      flags: {
  PRESERVE_WEBPACK_CACHE: true,
}
    },
  ],
};