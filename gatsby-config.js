/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@webdev",
    twitterUsername: "@john_smilga",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },  
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://165.232.151.50/`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`],
      },
    },

    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },
  ],
}
