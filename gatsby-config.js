module.exports = {
  siteMetadata: {
    title: `rotegras`,
    description: `rotegras is a design and development office in Berlin`,
    author: `rotegras`,
  },
  pathPrefix: "/gatsbycv",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Audiowide`,
            variants: [`400`]
          },
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `700`],
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `rotegras.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
