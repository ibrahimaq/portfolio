/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// @ts-check

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// const gatsbyConfig = {}

// module.exports = gatsbyConfig

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    indexPageTitle: "Ibrahim Al-Quraishi | developer portfolio",
    author: "Ibrahim Al-Quraishi",
    description:
      "Hi, I'm a frontend web developer in London. I enjoy building meaningful applications whilst sharing resources and blogging about my journey into web development",
    url: "https://ibrahimaq.com",
  },
  graphqlTypegen: true,
  plugins: [
    // "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-cards`, //name of instance - call it anything but usually same as folder
        path: `${__dirname}/src/project-card/`, //name folder to look in
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-cards-images`, //name of instance - call it anything but usually same as folder
        path: `${__dirname}/src/project-card/`, //name folder to look in
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`, //name of instance - call it anything but usually same as folder
        path: `${__dirname}/src/content/`, //name folder to look in
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "bdracula",
              lineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              linkImagesToOriginal: true,
              showCaptions: true,
              wrapperStyle: "margin: 40px 0 10px;",
            },
          },
        ],
      },
    },
  ],
  trailingSlash: "ignore",
}

//`gatsby-transformer-sharp`,
