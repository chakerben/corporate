require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Strapi+Gatsby Corporate Starter`,
    siteUrl: `${process.env.GATSBY_STRAPI_URL || "http://localhost:1338"}`,
    description: `A Strapi+Gatsby corporate starter`,
    author: `Strapi`,
    languages: { defaultLocale: "en", locales: ["en"] },
  },
  plugins: [
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL || "http://localhost:1338",
        collectionTypes: [
          {
            name: 'page',
            api: {
              qs: {
                _publicationState: 'preview',
                _locale: 'all'
              }
            },
          },
          "article", "category", "writer"
        ],
        singleTypes: [
          {
            name: 'global',
            api: {
              qs: {
                _locale: 'en'
              }
            },
          }
        ],
        queryLimit: 1000,
      },
    },
  ],
}
