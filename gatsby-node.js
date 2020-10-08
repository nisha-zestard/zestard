/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {

  const {createRedirect} = actions
  

  let response = await graphql(`
  query redirects {
    allWordpressAcfOptions {
      edges {
        node {
          options {
            wordpress_301_redirects {
              request_url
              destination_url
            }
          }
        }
      }
    }
  }`)

  // let reurl = response.data.allWordpressAcfOptions.edges[0].node.options.wordpress_301_redirects.request_url
  // let desurl = response.data.allWordpressAcfOptions.edges[0].node.options.wordpress_301_redirects.destination_url
  
    

 let data = response.data.allWordpressAcfOptions.edges[0].node.options.wordpress_301_redirects.forEach(redirect => {
    //console.log(data);
    // {redirect !== null &&
    //   console.log(redirect);
    // }
    createRedirect({ 
      fromPath: `${redirect.request_url}`, 
      toPath: `${redirect.destination_url}`, 
      isPermanent: true 
    });
  })
  
  //createRedirect({ fromPath: 'https://www.zestard.com/company/bussiness-models/', toPath: 'https://www.zestard.com/company/partnership/', isPermanent: true });
  
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost(sort: {order: DESC, fields: date}) {
        edges {
          node {
            id
            slug
            status
            date
            excerpt
            categories {
              slug
              name
            }
          }
        }
      }
      allWordpressWpUsers {
        edges {
          node {
            name
            slug
          }
        }
      }  
      allWordpressWpCulture {
        edges {
          node {
            title
            slug
            id
            wordpress_id
            featured_media {
              source_url
            }
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            title
            path
            wordpress_id
          }
        }
      }
    }
  `)

  const { allWordpressPost,  
          allWordpressWpUsers, allWordpressWpCulture,
          allWordpressPage} = result.data

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const CategoryPostsTemplate = path.resolve(`./src/templates/categoryPosts.js`)
  const AuthorPostsTemplate = path.resolve(`./src/templates/authorPosts.js`)
  const BlogEventTemplate = path.resolve(`./src/templates/blogEvent.js`)
  //const ServiceTemplate = path.resolve(`./src/templates/services.js`)
  const postTemplate = path.resolve(`./src/templates/blogpost.js`)
  const BlogPosts = path.resolve(`./src/templates/blog.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'

  // Creating pages for Services

  allWordpressPage.edges.forEach(edge => {
    const removePre = (url) => {
      var path = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
      const newUrl = path.substr(path.indexOf('/', 7) + 1)
      return newUrl;
    }
    
    // if(edge.node.path.indexOf('services') > -1) {
    //   //console.log('Services origin path---->'+edge.node.path);
    //   //console.log('Services path---->'+removePre(edge.node.path));
    //   createPage({
    //     path: `${removePre(edge.node.path)}`,
    //     component: slash(ServiceTemplate),
    //     context: {
    //       id: edge.node.wordpress_id,
    //     },
    //   })
      
    //  }
  })

  // Creating pages for blog posts

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        cat: edge.node.categories[0].slug
      },
    })
  })

  // creating pages for Category posts

  // allWordpressCategory.edges.forEach(edge => {
  //   if (edge.node !== null) {
  //     createPage({
  //       path: `/blog/category/${edge.node.slug}/`,
  //       component: slash(CategoryPostsTemplate),
  //       context: {
  //         slug: edge.node.slug,
  //       },
  //     })
  //   }

  // })

  // Creating pages for Author posts

  allWordpressWpUsers.edges.forEach(edge => {
    createPage({
      path: `/author/${edge.node.slug}/`,
      component: slash(AuthorPostsTemplate),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // creating pages for blog events

  allWordpressWpCulture.edges.forEach(edge => {
    createPage({
      path: `/culture/${edge.node.slug}/`,
      component: slash(BlogEventTemplate),
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })
  
  // Pagination for blog posts page

  const posts = allWordpressPost.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: slash(BlogPosts),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });

  

}

// To solve React : React-Hot-Loader: react-fire-dom patch is not detected. React 16.6+ features may not work.
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
