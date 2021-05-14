const path = require("path")
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {

  /*Creating 301 redirection */
//   const {createRedirect} = actions  

//   let response = await graphql(`
//   query redirects {
//     allWordpressAcfOptions {
//       edges {
//         node {
//           options {
//             wordpress_301_redirects {
//               request_url
//               destination_url
//             }
//           }
//         }
//       }
//     }
//   }`)  
    

//  let data = response.data.allWordpressAcfOptions.edges[0].node.options.wordpress_301_redirects.forEach(redirect => {
   
//     createRedirect({ 
//       fromPath: `${redirect.request_url}`, 
//       toPath: `${redirect.destination_url}`, 
//       isPermanent: true 
//     });
//   })

/*Page creation */
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPost(sort: {order: DESC, fields: date}) {
        edges {
          node {
            id
            slug
            status
            date
            excerpt
            categories {
              nodes {
                slug
                name
              }
            }            
          }
        }
      }
      allWpUser {
        edges {
          node {
            name
            slug
          }
        }
      }  
      allWpCptuiCulture {
        edges {
          node {
            title
            slug
            id
            databaseId
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      allWpPage {
        edges {
          node {
            slug
            title
            link
            databaseId
          }
        }
      }
    }
  `)

  const { allWpPost,  
          allWpUser, allWpCptuiCulture,
          allWpPage} = result.data

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const CategoryPostsTemplate = path.resolve(`./src/templates/categoryPosts.js`)
  const AuthorPostsTemplate = path.resolve(`./src/templates/authorPosts.js`)
  const BlogEventTemplate = path.resolve(`./src/templates/blogEvent.js`)
  const postTemplate = path.resolve(`./src/templates/blogpost.js`)
  const BlogPosts = path.resolve(`./src/templates/blog.js`)
  // const ServiceTemplate = path.resolve(`./src/templates/services.js`)

  // Creating pages for Services

  allWpPage.edges.forEach(edge => {
    const removePre = (url) => {
      var path = url.replace (/^[a-z]{5}:\/{2}[a-z]{1,}\.[a-z]{3}.(.*)/, '$1');
      const newUrl = path.substr(path.indexOf('/', 7) + 1)
      return newUrl;
    }

    // if(edge.node.path.indexOf('services') > -1) {
    //   createPage({
    //     path: `${edge.node.path}`,
    //     component: slash(ServiceTemplate),
    //     context: {
    //       id: edge.node.wordpress_id,
    //     },
    //   })
    //  }

  })


  // Creating pages for blog posts

  allWpPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        cat: edge.node.categories.nodes[0].slug
      },
    })
  })

  // Creating pages for Author posts

  allWpUser.edges.forEach(edge => {
    createPage({
      path: `/author/${edge.node.slug}/`,
      component: slash(AuthorPostsTemplate),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // creating pages for blog events

  allWpCptuiCulture.edges.forEach(edge => {
    createPage({
      path: `/culture/${edge.node.slug}/`,
      component: slash(BlogEventTemplate),
      context: {
        id: edge.node.databaseId,
      },
    })
  })
  
  // Pagination for blog posts page

  const posts = allWpPost.edges
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

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
