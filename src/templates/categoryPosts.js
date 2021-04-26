// Template for blog-category Posts 

import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "./../components/layout"
import BlogSidebar from './../components/blogsidebar'
import { removePre, removeSpecialSymbols } from './../util/common'
import SEO from "../components/seo";

class CategoryPostsTemplate extends Component {
  
  render() {
    // const data = this.props.data
    // const path = this.props.location.pathname
    // const parameters = path.split('/');
    // const len = parameters.length
    // const catName = parameters[len-2]
    // const data1 = data.allWpPost;
    return (
      <Layout>
      {/* <SEO title={`${catName} Archives`} /> */}
        <div id="page" className="site">
          <div id="content" className="site-content">
            {/* blog header */}
            <section>
              <div className="blog-header">
                <div className="container">
                  <div className="row">
                    {/* {data1 !== null && data1.edges.length > 0 &&
                      <div className="col-md-12 text-center">
                        {data1.edges[0].node.categories.map((node, index) => (
                          <div key={index}>
                            {node.slug === catName &&
                            <h1>{node.name}</h1>
                            }
                          </div>
                        ))}
                      </div>
                    } */}
                  </div>
                </div>
              </div>
            </section>
            <div id="primary" className="content-area blog-list">
              <main id="main" className="site-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 blog-posts-wrap">
                    {/* {data.allWpPost.edges.map(node => (
                      <div key={node.node.id}>
                        <article id="post-{node.id}"
                        className="post-{node.id} post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks card">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="card-image">
                                <Link to={`/${removePre(node.node.link)}`} className="post-thumbnail">
                                {node.node.featured_media !== null && node.node.featured_media.source_url !== null && node.node.featured_media.source_url !== null &&
                                  <Img fluid={node.node.featured_media.source_url} alt="" loading="lazy" />
                                }</Link>
                              </div>
                              <div className="section-desc">
                                <header className="entry-header">
                                  <h2 className="card-title entry-title">
                                    <Link to={`/${removePre(node.node.link)}`}>{`${removeSpecialSymbols(node.node.title)}`}</Link>
                                  </h2>
                                </header>
                                <div className="card-description"
                                dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />
                            </div>
                                <footer className="blog-section-footer">
                                  <div className="row">
                                    <div className="col-md-8 col-sm-8">
                                      <div className="author">
                                        <div>By 
                                        <Link to={`/${removePre(node.node.author.link)}`} className="vcard author">
                                          <strong className="fn">
                                          {node.node.author !== null &&
                                          <span>  {node.node.author.name}</span>
                                          } 
                                          </strong>
                                        </Link>, 
                                        
                                          <time> {node.node.date}</time>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                      <div className="read-more-link">
                                        <Link to={`/${removePre(node.node.link)}`}>Read More</Link>
                                      </div>
                                    </div>
                                  </div>
                                </footer>
                                </div>
                          </div>
                        </article>
                      </div>
                    ))} */}
                    </div>
                    <div className="col-md-4 blog-sidebar-wrapper col-md-offset-0">
                      <div>
                      <aside id="secondary" className="widget-area">
                        {/* <BlogSidebar /> */}
                      </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}

export default CategoryPostsTemplate

// export const pageQuery = graphql`
//   query($slug: String!) {
//     allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
//       edges {
//         node {
//           id
//           title
//           slug
//           date(fromNow: true)
//           excerpt
//           link
//           author {
//             node {
//               name
//               slug
//               uri
//             }
//           }
//           featuredImage {
//             node {
//               sourceUrl
//             }
//           }
//           categories {
//             nodes {
//               name
//               link
//               slug
//             }
//           }
//         }
//       }
//     }
//   }
// `