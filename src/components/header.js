// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { removePre } from './../util/common';

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
      allWordpressMenusMenusItems(filter: {wordpress_id: {eq: 207}}) {
        nodes {
          name
          items {
            title
            url
            child_items {
              title
              url
              wordpress_id
              target
            }
          }
        }
      }
    }
  `)

  const acfoptions = data.allWordpressAcfOptions.edges[0].node.options;
  const maninmenu = data.allWordpressMenusMenusItems.nodes[0].items;
  console.log(maninmenu[0]);
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
          <Navbar bg="default" expand="lg" id="sectionsNav" className="site-nav d-flex justify-content-end align-items-center">
            <ul className="nav">
              <li><a href="#">{maninmenu[0].title}</a>
                <ul className="sub-menu">
                  <li><Link to={`/services/${removePre(maninmenu[0].child_items[0].url)}`}>{maninmenu[0].child_items[0].title}</Link></li>
                  <li><Link to={`/services/${removePre(maninmenu[0].child_items[1].url)}`}>{maninmenu[0].child_items[1].title}</Link></li>
                  <li><Link to={`/services/${removePre(maninmenu[0].child_items[2].url)}`}>{maninmenu[0].child_items[2].title}</Link></li>
                </ul>
              </li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Navbar>
            {/* <div className="site-nav d-flex justify-content-end align-items-center">
              <ul className="nav">
                  <li><a href="#">{maninmenu[0].title}</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <div className="request-a-quote">
                <a href="#" className="btn-primary">Request a Quote</a>
              </div>
            </div> */}
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
