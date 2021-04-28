import React from "react";
import { Link } from "gatsby";
import { removePre } from './../util/common';
import MascotImage from '../assets/images/Mascot.png';

const AboutProject = (props) => {
  console.log(props)
    return (
      
      <div className="footer-contactus text-center">
                <div className="container">
                    <div className="footer-contactus-inner">
                        <div className="contcta-image">                         
                            <img src={MascotImage} alt="Tell us about your project banner"/>                                                 
                        </div>
                        <div className="content">
                            <h2>{props.comcontact.ccfpTitle}</h2>
                            {props.comcontact.ccfpSubTitle !== null &&
                              <div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{__html: props.comcontact.ccfpSubTitle}} />
                            }                        
                            <Link to={props.comcontact.ccfpButtonLink} className="start-pro-btn">{props.comcontact.ccfpButtonText}</Link>
                        </div>
                    </div>
                </div>
              </div>
    )
}


export default AboutProject;