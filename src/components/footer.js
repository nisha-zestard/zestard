import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { removePre } from './../util/common';
const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    allWordpressMenusMenusItems(filter: {wordpress_id: {eq: 7}}) {
      edges {
        node {
          name
          items {
            title
            url
          }
        }
      }
    }
    allWordpressAcfOptions {
      edges {
        node {
          options {
            light_site_logo {
              source_url
            }
            contact_email
            phone_number
            star_image {
              source_url
            }
            contact_number
            star_content
            menu_title_with_links {
              menu_title
              menu_links {
                link_title
                link
              }
            }
            social_media {
              social_media_icon
              social_media_link
              social_media_name
            }
            copyrigth
            external_links {
              external_image {
                source_url
              }
              external_link
            }
          }
        }
      }
    }
  }
`)
const foomenu = data.allWordpressMenusMenusItems.edges[0].node.items;
const acf = data.allWordpressAcfOptions.edges[0].node.options;

  return(
    <footer className="site-footer">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-col-left">
              <div className="f-left-top">
                <div className="footer-logo">
                  {acf.light_site_logo !== null &&
                    <img src={acf.light_site_logo.source_url} altr="Light footer logo"/>
                  }                  
                </div>
                <div className="contact-info">
                  <ul className="m-0 p-0">
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <a href={'mailto:'+acf.contact_email}>{acf.contact_email}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <a href={'tel:'+acf.contact_number}>{acf.contact_number}</a>									
                    </li>
                  </ul>
                </div>
                <div className="company-ratings">
                  <div className="figure">
                    {acf.star_image !== null &&
                      <img src={acf.star_image.source_url} />
                    }                    
                  </div>
                  <p className="m-0">{acf.star_content}</p>
                </div>
              </div>
              <div className="socials">
                <ul className="p-0 m-0">
                  {acf.social_media.map((node,index) => (
                    <li key={index}>  
                      <a href={node.social_media_link}><i className={node.social_media_icon}></i></a>
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
                  {acf.menu_title_with_links.map((node,index) => (
                    <div className="col-sm-4 footer-col" key={index}>
                    <div className="footer-col-inner">
                      <h3 className="s-title">{node.menu_title}</h3>
                      <ul className="m-0 p-0 s-list">
                        {node.menu_links.map((node,index) => (
                          <li key={index}><a href={node.link}>{node.link_title}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              <div className="f-right-bottom"> 
                <ul className="f-menu m-0 p-0 d-flex">
                  {foomenu.map((node,index) => (
                    <li key={index}><Link to={`/${removePre(node.url)}`}>{node.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="footer-creadientials">
                <ul className="p-0 m-0 d-flex justify-content-center">
                   <li>
                     {acf.external_links[0].external_image.source_url !== null &&
                      <a href="https://apps.shopify.com/partners/zestard-technologies" target="_blank"><img src={acf.external_links[0].external_image.source_url} /></a>
                     }                    
                  </li>
                  <li>
                     {acf.external_links[1].external_image.source_url !== null &&
                      <a href="https://zestardshop.com/" target="_blank"><img src={acf.external_links[1].external_image.source_url} /> </a>
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
              <p className="m-0">{acf.copyrigth}</p>
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
