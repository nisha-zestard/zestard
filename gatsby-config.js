module.exports = {
  siteMetadata: {
    title: `Zestard Technologies`,
    description: `Offshore Website Design & Development Company | Zestard Technologies`,
    author: `@zestard`,
    siteUrl: 'https://zestard-mmm.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://zestard-mmm.netlify.app`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://phptasks.com/zestard-mmm/graphql",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        // baseUrl: "http://phptasks.com/zestard-mmm",
        url: "http://phptasks.com/zestard-mmm/graphql",
        // The protocol. This can be http or https.
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        schema: {
          requestConcurrency: 50, // currently set to 15
          previewRequestConcurrency: 20, // currently set to 5
        },
        includedRoutes: [
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/menus",
          "/*/*/portfolio"
        ],
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        // auth: {
        //   wpcom_user: "mywp",
        //   wpcom_pass: '$m@r+(wp)',
        // },
        useACF: true,
        // perPage: 100,
        // concurrentRequests: 10,
        // keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://finntia.phptasks.com/",
        //   replacementUrl: "https://finntia.netlify.com/",
        // },
      }
    },
    // {
    //   resolve: `gatsby-source-wordpress-experimental`,
    //   options: {
    //     url: `http://phptasks.com/zestard-mmm/graphql`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
