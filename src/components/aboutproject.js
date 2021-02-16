import React from "react"
import { graphql, Link, StaticQuery } from "gatsby";
import { removePre } from './../util/common';


class AboutProject extends React.Component {
  
  render () {
    const {
      apsiwtch,
      apimage,
      aptitle,
      apcontent,
      apbuttontext,
      apbuttonlink,
    } = this.props;
    return (
      <StaticQuery
      query={graphql`
        query {
          allWp {
            edges {
              node {
                ctaSettings {
                  acfCTAModule {
                    ctaModLink
                    ctaModDescription
                  }
                }
              }
            }
          }
        }
      `}      
      render={(data) => {             
        const ctamodul = data.allWordpressAcfOptions.edges[0].node.options;
        return(
          <section>
            {apsiwtch === true &&
              <div className="footer-contactus text-center">
                  <div className="container">
                    <div className="footer-contactus-inner">
                          <div className="contcta-image">
                            {ctamodul.cta_mod_mascot_image.source_url !== null &&
                              <img src={ctamodul.cta_mod_mascot_image.source_url} alt="Tell us about your project banner"/>
                          }                        
                          </div>
                        <div className="content">
                            <h2>{ctamodul.cta_mod_title}</h2>
                              {ctamodul.cta_mod_content !== null &&
                                <div dangerouslySetInnerHTML={{__html:ctamodul.cta_mod_content}} />
                            }                        
                              <Link to={`/${removePre('contact-us')}`} className="start-pro-btn">{ctamodul.cta_mod_button_text}</Link>
                          </div>
                      </div>
                  </div>
              </div>
            }
            {apsiwtch === false &&
              <div className="footer-contactus text-center">
                <div className="container">
                    <div className="footer-contactus-inner">
                        <div className="contcta-image">
                          {apimage !== null &&
                            <img src={apimage.source_url} alt="Tell us about your project banner"/>
                          }                        
                        </div>
                        <div className="content">
                            <h2>{aptitle}</h2>
                            {apcontent !== null &&
                              <div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{__html: apcontent}} />
                            }                        
                            <Link to={`/${removePre(apbuttonlink)}`} className="start-pro-btn">{apbuttontext}</Link>
                        </div>
                    </div>
                </div>
              </div>
            }
            
          </section>
        )  
      }}
    />
    )
  }
}

export default AboutProject
