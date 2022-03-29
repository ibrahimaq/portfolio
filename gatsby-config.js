/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`, //name of instance - call it anything but usually same as folder
        path: `${__dirname}/src/posts/`, //name folder to look in
      },
    },
  ],
}


//`gatsby-transformer-sharp`,