// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { removePre } from './../util/common';
import { globalHistory as history } from '@reach/router'
const Header = () => {

  const handleOpen = (el) => {  
    const target = el.currentTarget.getElementsByClassName('dropdown-menu');   
  }
   
  const handleClose = (el) => {    
    const target = el.currentTarget.getElementsByClassName('dropdown-menu');
    if(target.length > 0) {
      const test = target[0].closest('.dropdown-menu');
        test.classList.remove('show');
        test.classList.remove('showmobmnu');
    }
  }
  const data = useStaticQuery(graphql`
  query {
    wordpressPage {
      id
    }
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
  const companymenu = maninmenu[0];
  const servicmenu = maninmenu[1];
  const workmenu = maninmenu[2];
  const blogmenu = maninmenu[3];
  const contactmenu = maninmenu[4];
  const isBrowser = typeof window !== `undefined`
  const { location} = history
  console.log(maninmenu);
 
  return(
    <header className="site-header">    
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="site-branding">
              {acfoptions.site_logo.source_url !== null &&
                <Link to="/"><img src={acfoptions.site_logo.source_url} alt="Site Logo" /></Link>                
              }              
            </div>
          </div>
          <div className="col-md-9">
          {/* <Navbar bg="default" expand="lg" id={isBrowser ? window.location.pathname === '/' ? 'home': 'other' : ''} className="site-nav d-flex justify-content-end align-items-center"> */}
          <Navbar bg="default" expand="lg" id={location.pathname === '/' ? 'home' : 'other'}  className="site-nav d-flex justify-content-end align-items-center">
            <ul className="nav">
              <li>{companymenu.title}
              <ul className="sub-menu">   
              {companymenu.child_items.map((node,index) => (
                  <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                ))}
              </ul>
              </li>
              <li>{servicmenu.title}
              <ul className="sub-menu">                
                {servicmenu.child_items.map((node,index) => (
                  <li key={index}><Link to={`/services/${removePre(node.url)}`}>{node.title}</Link></li>
                ))}                  
                </ul>
              </li> 
              <li>{workmenu.title}
              <ul className="sub-menu">   
                {workmenu.child_items.map((node,index) => (
                  <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                ))}
                </ul>
              </li>
              <li><Link to={`/${removePre(blogmenu.url)}`}>{blogmenu.title}</Link></li>
              <li><Link to={`/${removePre(contactmenu.url)}`}>{contactmenu.title}</Link></li>
            </ul>
          </Navbar>
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
