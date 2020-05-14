import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { removePre } from './../util/common';
import { globalHistory as history } from '@reach/router';
import { Route, Switch } from "react-router";

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
      console.log(workmenu);
      // let routes = (
      //   <Switch>
      //     <Route path={["/services/make", "/services/market", "/services/maintain"]}>
      //     <div className="services" />
      //     </Route>
      //     <Route>
      //     <div className="others" />
      //     </Route>
      //   </Switch>
      // );
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
        const handleClicko = (el) => { 
          const navbarmenu = document.getElementsByClassName('mobile-view')[0];
          navbarmenu.classList.toggle('show-mob-view');
          const shwmenu = document.getElementsByClassName('navbar-collapse')[0];
          shwmenu.classList.toggle('show');
          const menudiv = document.getElementById("mobmenu");
          menudiv.classList.toggle('mobmubtn');
          if(menudiv.innerHTML === '<div></div><div></div><div></div>') {            
            menudiv.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
          }
          else  {   
            menudiv.innerHTML = "<div></div><div></div><div></div>";
          }     
      }
      function renderSwitch(location) {
        
          switch(param) {          
            case '/services/make/':
              console.log('make inside location-------->'+location);
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
      return(
        <header className="site-header">    
          <div className="container d-flex frex-wrap justify-content-space-between header-inner">
                <div className="site-branding">            
                  {acfoptions.site_logo !== null && acfoptions.light_site_logo !== null &&              
                    <Link to="/"><img src={param === '/services/make/' ? lightlogo : location.pathname === '/services/market/' ? lightlogo : location.pathname === '/services/maintain/' ? lightlogo : darklogo} alt="Site Logo" /></Link>                                
                  }  
                </div>
              <div className="menu-wraper d-flex">
              <Navbar bg="default" expand="lg" id={location !== 'undefined' ? renderSwitch() : 'not matching'}  className="mobile-view site-nav navbar d-flex justify-content-end align-items-center">
              {/* <Navbar bg="default" expand="lg" id={renderSwitch()}  className="navbar navbar-light navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"> */}
              <button id="mobmenu" className="navbar-toggler" type="button" onClick={handleClicko} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <div></div>
                <div></div>
                <div></div>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                  <li className="nav-item menu-item">
                  <NavDropdown title={companymenu.title} id="basic-nav-dropdown"
                    onMouseEnter = { (e) => handleOpen(e) } onMouseLeave = { (e) => handleClose(e) } >
                      <ul>
                      {companymenu.child_items.map((node, index) => (
                        <li><Link to={`/${removePre(node.url)}`} key={index}>
                          {node.title}
                        </Link></li>
                      ))}
                      </ul>
                  </NavDropdown>
                  </li>
                  <li className="nav-item menu-item">
                  <NavDropdown title={servicmenu.title} id="basic-nav-dropdown"
                    onMouseEnter = { (e) => handleOpen(e) }
                    onMouseLeave = { (e) => handleClose(e) }>
                      <ul>
                      {servicmenu.child_items.map((node, index) => (
                        <li>
                          <Link to={`/services/${removePre(node.url)}`} key={index}>
                          {node.title}
                        </Link>
                        </li>
                      ))}
                      </ul>
                  </NavDropdown>
                  </li> 
                  <li className="nav-item menu-item">
                  <NavDropdown title={workmenu.title} id="basic-nav-dropdown"
                    onMouseEnter = { (e) => handleOpen(e) }
                    onMouseLeave = { (e) => handleClose(e) }>
                      <ul>
                      <li>
                        <Link 
                          to={`${workmenu.child_items[0].target === "" ? `/${removePre(workmenu.child_items[0].url)}` : workmenu.child_items[0].url}`} 
                          target={workmenu.child_items[0].target} >{workmenu.child_items[0].title}
                        </Link>
                      </li>
                      <li>
                        <a
                          href={workmenu.child_items[1].url} 
                          target={workmenu.child_items[1].target} >{workmenu.child_items[1].title}
                        </a>
                      </li>
                      <li>
                        <a 
                          href={workmenu.child_items[2].url} 
                          target={workmenu.child_items[2].target} >{workmenu.child_items[2].title}
                        </a>
                      </li>                        
                      </ul>
                      
                  </NavDropdown>
                  </li>
                  <li className="nav-item menu-item"><Link to={`/${removePre(blogmenu.url)}`}>{blogmenu.title}</Link></li>
                  <li className="nav-item menu-item"><Nav.Link href={`/${removePre(contactmenu.url)}`}>{contactmenu.title}</Nav.Link></li>
                </ul>
                </div>
              </Navbar>
              <div className="request-a-quote">
                <Link to={`/${removePre(contactmenu.url)}`} className="btn-primary">Request a Quote</Link>
              </div>
              </div>
          </div>  
      </header>
      )  
    }}
  />
)
