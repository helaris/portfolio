module.exports = {
  siteMetadata: {
    title: `Helari's Portfolio`,
    siteUrl: `https://www.helarisosi.com/`,
    description: `Helari's Personal Portfolio. Here I show all the recent work I've done and little bit about me.`,
    author: `Helari Sosi`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helari-Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        contentTypes: [
          "nav",
          "project",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500, 600`,
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
