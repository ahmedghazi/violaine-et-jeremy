const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}
const { spaceId, accessToken } = process.env;

const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteTitle: website.title,
    siteDescription: website.description,
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        //background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        //icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsID,
      },
    }
  ],
};
