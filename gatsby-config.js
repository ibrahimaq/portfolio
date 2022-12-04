/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
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

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',

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
        name: `client-cards`, //name of instance - call it anything but usually same as folder
        path: `${__dirname}/src/client-card/`, //name folder to look in
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
        ],
      },
    },
  ],
}

//`gatsby-transformer-sharp`,
