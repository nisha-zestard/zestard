// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {

  const data = useStaticQuery(
    graphql`
    {
      allWordpressAcfOptions {
        edges {
          node {
            options {
              site_logo {
                source_url
              }
            }
          }
        }
      }
    }
  `)

  const acfoptions = data.allWordpressAcfOptions.edges[0].node.options;
  return(
    <header className="site-header">    
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="site-branding">
              {acfoptions.site_logo.source_url !== null &&
                <img src={acfoptions.site_logo.source_url} alt="Site Logo" />
              }              
            </div>
          </div>
          <div className="col-md-9">
            <div className="site-nav d-flex justify-content-end align-items-center">
              <ul className="nav">
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <div className="request-a-quote">
                <a href="#" className="btn-primary">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </header>
  )  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
