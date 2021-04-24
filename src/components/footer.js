import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { removePre } from './../util/common';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    allWpMenuItem(filter: {menu: {node: {slug: {eq: "footer-menu"}}}}) {
      edges {
        node {
          label
          url
        }
      }
    }
    allWp {
      edges {
        node {
          themeGeneralSettings {
            acfGeneralThemeSettings {
              contactEmail
              phoneNumber
              lightSiteLogo {
                sourceUrl
              }
              socialMedia {
                socialMediaLink
                socialMediaIcon
                socialMediaName
              }
            }
            acfFooter {
              starImage {
                sourceUrl
              }
              contactNumber
              copyrigth
              starContent
              menuTitleWithLinks {
                menuTitle
                menuLink
                innerLinks {
                  innerTitle
                  innerIndiLink
                }
              }
              externalLinks {
                externalLink
                externalImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`)

 const foomenu = data.allWpMenuItem.edges;
 const acf = data.allWp.edges[0].node.themeGeneralSettings;
 const foocusmenu = acf.acfFooter.menuTitleWithLinks;
 
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
  return(
    <footer className="site-footer">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-col-left">
              <div className="f-left-top">
                <div className="footer-logo">
                  {acf.acfGeneralThemeSettings.lightSiteLogo.sourceUrl !== null &&
                    <Link to="/"><img src={acf.acfGeneralThemeSettings.lightSiteLogo.sourceUrl} alt="Light footer logo" /></Link>
                  }                  
                </div>
                <div className="contact-info">
                  <ul className="m-0 p-0">
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <a href={'mailto:'+acf.acfGeneralThemeSettings.contactEmail}>{acf.acfGeneralThemeSettings.contactEmail}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <a href={'tel:'+acf.acfFooter.contactNumber}>{acf.acfFooter.contactNumber}</a>									
                    </li>
                  </ul>
                </div>
                <div className="company-ratings">
                  <div className="figure">
                    {acf.acfFooter.starImage !== null &&
                      <img src={acf.acfFooter.starImage.sourceUrl} alt="Company rating"/>
                    }                    
                  </div>
                  <p className="m-0">{acf.acfFooter.starContent}</p>
                </div>
              </div>
              <div className="socials">
                <ul className="p-0 m-0">
                  {acf.acfGeneralThemeSettings.socialMedia.map((node,index) => (
                    <li key={index}>  
                      <a href={node.socialMediaLink} target="_blank" rel="noopener noreferrer"><i className={node.socialMediaIcon}></i></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="footer-col-right">
              <div className="f-right-top">
                <div className="row">
                  {foocusmenu.map((node,index) => (
                    <div className="col-sm-4 footer-col" key={index}>
                      <div className="footer-col-inner">
                        <h3 className="s-title"><Link to={node.menuLink}>{node.menuTitle}</Link></h3>
                        <ul className="m-0 p-0 s-list">
                          {node.innerLinks.map((node,index) => (
                            <li key={index}><Link to={node.innerIndiLink}>{node.innerTitle}</Link></li>
                          ))}
                        </ul>
                      </div>
                      <div className="footer-col-inner mobilefooddmenu">                        
                        <NavDropdown title={node.menuTitle} id="basic-nav-dropdown"
                          onMouseEnter = { (e) => handleOpen(e) } onMouseLeave = { (e) => handleClose(e) } >
                            <ul className="m-0 p-0 s-list">
                              {node.innerLinks.map((node,index) => (
                                <li key={index}><a href={node.innerIndiLink}>{node.innerTitle}</a></li>
                              ))}
                            </ul>
                        </NavDropdown>                       
                      </div>
                  </div>
                   ))}
                   {/* <div className="col-sm-4 footer-col last-col">
                      <div className="footer-col-inner">
                        <ul className="m-0 p-0 s-list"> 
                          {foocusmenu.map((node,index) => (
                            <li key={index}><Link to={`/${removePre(node.menuLink)}`}>{node.menuTitle}</Link></li>
                          ))}
                        </ul>                      
                      </div>
                      <div className="footer-col-inner mobilefooddmenu">
                        <NavDropdown title="Quick Links" id="basic-nav-dropdown"
                          onMouseEnter = { (e) => handleOpen(e) } onMouseLeave = { (e) => handleClose(e) } >
                            <ul className="m-0 p-0 s-list"> 
                              {foomenu.map((node,index) => (
                                <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                              ))}
                            </ul>
                        </NavDropdown>                          
                      </div>
                   </div> */}
                </div>
              </div>
              <div className="f-right-bottom">
              <h3 className="s-title">Quick Links</h3>
                <ul className="f-menu m-0 p-0 d-flex">
                  {foomenu.map((node,index) => (
                    <li key={index}><Link to={node.node.url}>{node.node.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="footer-creadientials">
                <ul className="p-0 m-0 d-flex justify-content-center">
                   <li>
                     {acf.acfFooter.externalLinks[0].externalImage.sourceUrl !== null &&
                      <a href="https://zestardshop.com/" target="_blank" rel="noopener noreferrer"><img src={acf.acfFooter.externalLinks[0].externalImage.sourceUrl} alt="Zestard shop logo" /></a>
                     }                    
                  </li>
                  <li>
                     {acf.acfFooter.externalLinks[1].externalImage.sourceUrl !== null &&
                      <a href="https://apps.shopify.com/partners/zestard-technologies" target="_blank" rel="noopener noreferrer"><img src={acf.acfFooter.externalLinks[1].externalImage.sourceUrl} alt="Shopify app logo" /> </a>
                     }                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row flex-wrap">
          <div className="col-md-8 col-lg-7">
            <div className="copyright-text">
              <p className="m-0">{acf.acfFooter.copyrigth}</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-5">
            <div className="bottom-link">
              <ul className="m-0 p-0 d-flex justify-content-end">
                <li><Link to={'/privacy-policy/'}>Privacy Policy</Link></li>
                <li><Link to={'/terms-of-use/'}>Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>   
  )  
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
