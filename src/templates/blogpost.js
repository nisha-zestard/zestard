import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./../components/layout"
import Header from "./../components/header";
import BlogPostFooter from './../components/blogpostfooter';
import { dateFormate, removeSpecialSymbols } from './../util/common';
import SEO from "../components/seo";
import BoniImage from '../assets/images/boni-satani.png';
import RiteshImage from '../assets/images/ritesh-vatwani.jpg';
import AnujImage from '../assets/images/anuj-dalal.jpg';
import DefaultUserImage from '../assets/images/default-user.png';

class PostTemplate extends Component {
    componentDidMount() {
        if(document.getElementById("hstofbtn")) {
            document.getElementById("hstofbtn").addEventListener("click", function() {
              var x = document.getElementById("showtofid");
              if (x.style.display === "none") {
                x.style.display = "block";
                document.getElementById("hstofbtn").innerHTML = "[Hide]";
              } else {
                x.style.display = "none";document.getElementById("hstofbtn").innerHTML = "[Show]";
              }
            });
          }
    }
  render() {
    const data = this.props.data;    
    const post = data.wpPost;
    
    return (
      <Layout>
      <SEO title="Blog post"/>
      <Header headernavclass="lightheader" />
        <div id="page" className="site">
            <div id="content" className="single-post-detail site-content">
                <div id="primary" className="content-area ">
                    <main id="main" className="site-main blog-post blog-post-wrapper">
                        <div className="container">
                            <div className="row">
                            {/* sticky sidebar with social icons */}
                                <div className="col-md-2 sticky">
                                    <div className="blog-social" id="sidebar">
                                        <h3>Share</h3>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/zestard"  target="_blank" rel="noopener noreferrer">
                                                    <i aria-hidden="true" className="fab fa-facebook-square"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/zestardtech"  target="_blank" rel="noopener noreferrer">
                                                    <i aria-hidden="true" className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/zestard"  target="_blank" rel="noopener noreferrer">
                                                    <i aria-hidden="true" className="fab fa-linkedin-square"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* post details */}
                                <div className="single-post-wrap col-md-10 col-lg-8">
                                    <section>
                                        <div className="blog-header">
                                            <h1 className="hestia-title">{`${removeSpecialSymbols(post.title)}`}</h1>
                                            <div className="authormeta">
                                                <div className="author_avatar">
                                                <img alt={post.author.node.name} src={post.author.node.name === "Boni Satani" ? BoniImage : post.author.node.name === "Ritesh Vatwani" ? RiteshImage : post.author.node.name === "Anuj Dalal" ? AnujImage : post.author.node.name === "Tiksha Dalal" ? DefaultUserImage : DefaultUserImage} />                                                                                                   </div>
                                                <div className="author-details">
                                                    <h4 className="author-name">{post.author.node.name}</h4>
                                                    <span className="date">{dateFormate(post.date)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <article id="post-2588" 
                                    className="post-2588 post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="single-blog-desc">
                                                    <div className="content-description"
                                                      dangerouslySetInnerHTML={{ __html: post.content }}  
                                                    />
                                                    {post.author.description !== "" &&
                                                        <div>
                                                        <hr />
                                                        <div className="authorbio">
                                                            <div className="authorbio-top">
                                                                <div className="author-image">
                                                                    <img loading="lazy" alt={post.author.node.name} src={post.author.node.name === "Boni Satani" ? BoniImage : post.author.node.name === "Ritesh Vatwani" ? RiteshImage : post.author.node.name === "Anuj Dalal" ? AnujImage  : post.author.node.name === "Tiksha Dalal" ? DefaultUserImage : DefaultUserImage} />                                                                
                                                                </div>
                                                                <div className="title">
                                                                    <h3>About {post.author.node.name}</h3>
                                                                </div>
                                                            </div>
                                                            <p dangerouslySetInnerHTML={{ __html: post.author.node.description }} />
                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* related posts */}
                            <BlogPostFooter allPost = {data.allWpPost}/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!, $cat: String! ) {
    wpPost(id: {eq: $id}) {
        title
        date(locale: "")
        content
        author {
          node {
            name
            description
          }
        }
        categories {
          nodes {
            slug
          }
        }
    }
    allWpPost(limit: 3, filter: {categories: {nodes: {elemMatch: {slug: {eq: $cat}, id: {ne: $id}}}}}) {
        edges {
          node {
            id
            title
            databaseId
            date(formatString: "1")
            slug
            excerpt
            link
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
    }
  }
`
