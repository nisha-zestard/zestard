import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
                        <img src={ctamodul.cta_mod_mascot_image.source_url} />
                    </div>
                    <div className="content">
                        <h2>{ctamodul.cta_mod_title}</h2>
                        <p dangerouslySetInnerHTML={{__html:ctamodul.cta_mod_content}} />
                        <a className="start-pro-btn" href="#">{ctamodul.cta_mod_button_text}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProject