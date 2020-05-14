import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { removePre } from './../util/common';

const AboutProject =   () => {
  const data = useStaticQuery(graphql`
    query {
        allWordpressAcfOptions {
            edges {
              node {
                options {
                  cta_mod_class
                  cta_mod_title
                  cta_mod_content
                  cta_mod_button_text
                  cta_mod_button_link
                  cta_mod_mascot_image {
                    source_url
                  }
                }
              }
            }
        }
    }
    
  `)
  const ctamodul = data.allWordpressAcfOptions.edges[0].node.options;
  
    return (
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
    )
}

export default AboutProject