import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "./../components/layout"
import Header from "./../components/header";
import BlogSidebar from './../components/blogsidebar'
import { removePre, removeSpecialSymbols } from './../util/common'
import SEO from "../components/seo";

class AuthorPostsTemplate extends Component {
  
  render() {
    const data = this.props.data;
    const authorName = data.allWpPost.edges[0].node.author.node.name;
    return (
      <Layout>
      <SEO title={authorName+  'Author'} />
      <Header headernavclass="lightheader" />
        <div id="page" className="site">
          <div id="content" className="site-content">
          {/* author header */}
            <section>
              <div className="blog-header">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1>{authorName}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* author posts */}
            <div id="primary" className="content-area blog-list">
              <main id="main" className="site-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 blog-posts-wrap">
                    {data.allWpPost.edges.map(node => (
                      <div key={node.node.id}>
                        <article id="post-{node.id}"
                        className="post-{node.id} post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks card">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="card-image">
                                <Link to={`/blog${removePre(node.node.link)}`} className="post-thumbnail">
                                {node.node.featuredImage !== null && node.node.featuredImage.node.sourceUrl !== null && node.node.featuredImage.node.sourceUrl !== null &&
                                  <img src={node.node.featuredImage.node.sourceUrl} alt="" loading="lazy"/>  
                                }</Link>
                              </div>
                              <div className="section-desc">
                                <header className="entry-header">
                                  <h2 className="card-title entry-title">
                                    <Link to={`/blog${removePre(node.node.link)}`}>{`${removeSpecialSymbols(node.node.title)}`}</Link>
                                  </h2>
                                </header>
                                <div className="card-description"
                                dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />
                                
                              </div>
                                <footer className="blog-section-footer">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                      <div className="author">
                                        <div>By 
                                        <Link to={node.node.author.node.uri} className="vcard author">
                                          <strong className="fn">
                                          {node.node.author !== null &&
                                          <span>  {node.node.author.node.name}</span>
                                          } 
                                          </strong>
                                        </Link>, 
                                          <time> {node.node.date}</time>                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                      <div className="read-more-link">
                                        <Link to={`/blog${removePre(node.node.link)}`}>Read More</Link>
                                      </div>
                                    </div>
                                  </div>
                                </footer>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                    </div>
                    <div className="col-md-4 blog-sidebar-wrapper col-md-offset-0">
                      <div>
                      {/* sidebar */}
                      <aside id="secondary" className="widget-area">
                        <BlogSidebar />
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


export default AuthorPostsTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    allWpPost(filter: {author: {node: {slug: {eq: $slug}}}}) {
      edges {
        node {
          id
          title
          slug
          date(fromNow: true)
          excerpt
          link
          author {
            node {
              name
              slug
              uri
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              link
              slug
            }
          }
        }
      }
    }
  }
`
