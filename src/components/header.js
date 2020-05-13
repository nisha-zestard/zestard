import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import { removePre } from './../util/common';
import { globalHistory as history } from '@reach/router';

class Header extends React.Component {
  
  render () {
    return (
      <div />
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
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
                light_site_logo {
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
    `}
    render={(data) => {
      const acfoptions = data.allWordpressAcfOptions.edges[0].node.options;
      const maninmenu = data.allWordpressMenusMenusItems.nodes[0].items;
      const darklogo = acfoptions.site_logo.source_url;
      const lightlogo = acfoptions.light_site_logo.source_url;
      const companymenu = maninmenu[0];
      const servicmenu = maninmenu[1];
      const workmenu = maninmenu[2];
      const blogmenu = maninmenu[3];
      const contactmenu = maninmenu[4];
      const { location} = history
      const param = location.pathname;
     
      function renderSwitch(location) {
        if(location !== 'undefined'){
          switch(param) {          
            case '/services/make/':
              console.log('make inside location-------->'+location);
              //console.log(param);
              return 'darkheader';
            case '/services/market/':
              return 'darkheader';
            case '/services/maintain/':
              return 'darkheader';
            default:
              console.log('Default location-------->'+location);
              return 'lightheader';
          }
        }
        
      }
      return(
        <header className="site-header">    
          <div className="container">
            <div className="header-inner">
            <div className="row">
              <div className="col-lg-3">
                <div className="site-branding">            
                  {acfoptions.site_logo !== null && acfoptions.light_site_logo !== null &&              
                    <Link to="/"><img src={param === '/services/make/' ? lightlogo : location.pathname === '/services/market/' ? lightlogo : location.pathname === '/services/maintain/' ? lightlogo : darklogo} alt="Site Logo" /></Link>                                
                  }  
                </div>
              </div>
              <div className="col-lg-9 d-flex justify-content-end">
              <Navbar bg="default" expand="lg" id={renderSwitch()}  className="site-nav navbar d-flex justify-content-end align-items-center">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                  <li className="has-submenu">{companymenu.title}
                  <ul className="sub-menu">   
                  {companymenu.child_items.map((node,index) => (
                      <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                    ))}
                  </ul>
                  </li>
                  <li className="has-submenu">{servicmenu.title}
                  <ul className="sub-menu">                
                    {servicmenu.child_items.map((node,index) => (
                      <li key={index}><Link to={`/services/${removePre(node.url)}`}>{node.title}</Link></li>
                    ))}                  
                    </ul>
                  </li> 
                  <li className="has-submenu">{workmenu.title}
                  <ul className="sub-menu">   
                    <li><Link to={`/${removePre(workmenu.child_items[0].url)}`}>{workmenu.child_items[0].title}</Link></li>
                    <li><a href={workmenu.child_items[1].url} target="_blank">{workmenu.child_items[1].title}</a></li>
                    <li><a href={workmenu.child_items[2].url} target="_blank">{workmenu.child_items[2].title}</a></li>
                  </ul>
                  </li>
                  <li><Link to={`/${removePre(blogmenu.url)}`}>{blogmenu.title}</Link></li>
                  <li><Link to={`/${removePre(contactmenu.url)}`}>{contactmenu.title}</Link></li>
                </ul>
                </div>
              </Navbar>
              <div className="request-a-quote">
                <Link to={`/${removePre(contactmenu.url)}`} className="btn-primary">Request a Quote</Link>
              </div>
              </div>
            </div>
          </div>  
          </div>
      </header>
      )  
    }}
  />
)
