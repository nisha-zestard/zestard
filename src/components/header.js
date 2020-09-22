import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { removePre } from './../util/common';
import { globalHistory as history } from '@reach/router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {    
    document.addEventListener('scroll', () => { 
      const stickyhead = document.getElementsByClassName('site-header')[0];  
      const stickyid = document.getElementsByClassName('mobile-view')[0]; 
      const shwmenu = document.getElementsByClassName('navbar-collapse')[0];      
      const menudiv = document.getElementById("mobmenu");      
      //console.log(stickyid);
      const isTop = window.scrollY ;     
      if (isTop >= 100) { 
        stickyhead.classList.add('sticky-header'); 
        stickyid.classList.remove('show-mob-view');
        shwmenu.classList.remove('show');
        menudiv.classList.remove('mobmubtn');
        if(menudiv.innerHTML === '<div></div><div></div><div></div>') {            
          menudiv.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        }
        else  {   
          menudiv.innerHTML = "<div></div><div></div><div></div>";
        } 
      }
      else { 
        stickyhead.classList.remove('sticky-header');
    
    }
    });
  }
  onScroll(isTop) {
    this.setState({ isTop });
  }
  render () {
    const {
      headernavclass,
    } = this.props;
    return (
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
        //const isBrowser = () => typeof window !== "undefined"
        const { location} = history
        const param = location.pathname;
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
        return(
          <header className="site-header">    
            <div className="container d-flex frex-wrap justify-content-space-between header-inner">
              <div className="site-branding">            
                {acfoptions.site_logo !== null && acfoptions.light_site_logo !== null &&              
                  <Link to="/"><img id="main-logo" src={param === '/services/make/' ? lightlogo : location.pathname === '/services/market/' ? lightlogo : location.pathname === '/services/maintain/' ? lightlogo : darklogo} alt="Site Logo" /></Link>                                
                }  
                {acfoptions.site_logo !== null &&             
                  <Link to="/"><img src={darklogo} id="dark-sticky-logo" alt="Site Logo" /></Link>                                
                } 
              </div>
              <div className="menu-wraper d-flex">
                <Navbar bg="default" expand="lg" id={headernavclass} className="mobile-view site-nav navbar d-flex justify-content-end align-items-center">
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
                          <li key={index}><Link to={`/${removePre(node.url)}`} key={index}>
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
                          <li key={index}>
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
                    <li className="nave-item menu-item request-quote-mob"><Link to={`/${removePre(contactmenu.url)}`} className="btn-primary">Request a Quote</Link></li>
                  </ul>
                  </div>
                  {/* <div className="request-a-quote">
                    <Link to={`/${removePre(contactmenu.url)}`} className="btn-primary">Request a Quote</Link>
                  </div> */}
                </Navbar>                
                </div>
            </div>  
        </header>
        )  
      }}
    />
    )
  }
}

export default Header
