// Bottom part in single BlogPost page

import React from "react";
import { Link } from "gatsby";
import { dateFormate, removePre, removeSpecialSymbols } from './../util/common'

import zestardIcon from "../assets/images/zestard-icon.png"

const BlogPostFooter = (props) => {
  const {
    allPost
  } = props;
  return (
    <div className="section related-posts bg-related-post">
      {allPost.edges.length > 0 &&
        <div className="container">
        <div className="row">
          <h2 className="related-blog-title title text-center">
              You may also like
          </h2>
          <div className="row">
          {allPost.edges.map(({ node }) => (
            <div className="col-md-4 rel-bog-wrap" key={node.id}>
              <div className="card card-blog">
                {node.featured_media !== null &&
                  <Link to={`/blog/${removePre(node.link)}`} className="post-thumbnail">
                    <img src={node.featured_media.source_url} alt="img" className="card-image" loading="lazy" />
                  </Link>
                }
                <div className="content">
                  <h4 className="card-title">
                    <Link to={`/blog/${removePre(node.link)}`}>{`${removeSpecialSymbols(node.title)}`}</Link>
                  </h4>
                  <div>
                    <span className="card-description" 
                      dangerouslySetInnerHTML={{ __html: node.excerpt }} 
                    />
                    <Link to={`/blog/${removePre(node.link)}`} className="moretag">Read more...</Link>
                  </div>
                </div>
                <div className="footer-blog">
                  <div className="row">
                    <div className="col-md-6">
                      <Link to="#">
                        <img src={zestardIcon} 
                          alt="Zestard-icon" loading="lazy"
                        />
                        <span>Zestard Tech.</span>
                      </Link>
                    </div>
                    <div className="col-md-6">                      
                        <i aria-hidden="true" className="fa fa-calendar-o"></i>                       
                      
                      <span>{dateFormate(node.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>}
    </div>
  )
}

export default BlogPostFooter
