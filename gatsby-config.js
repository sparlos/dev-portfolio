module.exports = {
  siteMetadata: {
    title: `Stephen Sparling Development`,
    description: `The portfolio for Stephen Sparling, web developer & designer.`,
    author: `@sparlos`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve("./src/components/layout.js"),
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Raleway:300,400,500,600,700"],
        },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stephen Sparling | Fullstack Dev`,
        short_name: `Stephen Sparling`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#1A202C`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
