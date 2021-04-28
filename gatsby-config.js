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
        siteUrl: `https://zestardstage.netlify.app/`,
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
        url: "http://phptasks.com/zestard-mmm/graphql",
        verbose: true,
        schema: {
          queryDepth: 15,
          circularQueryLimit: 5,
          timeout: 100000,
          perPage: 100,
          requestConcurrency: 50,
          previewRequestConcurrency: 50,
        },
        debug: {
          preview: true,
          timeBuildSteps: true,
          disableCompatibilityCheck: true,
          throwRefetchErrors: true,
          graphql: {
            showQueryVarsOnError: true,
            showQueryOnError: true,
            copyQueryOnError: true,
            onlyReportCriticalErrors: true,
            writeQueriesToDisk: true,
          },
        },
        production: {
          hardCacheMediaFiles: true,
        },
      }
    },
  ],
}
