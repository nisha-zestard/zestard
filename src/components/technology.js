// Service Layout

import React, { Component } from "react"
import { Link } from "gatsby"
import Footer from "./footer";
import { removePre } from './../util/common'
//import Img from "gatsby-image"
class Technology extends Component {
    
    render() {
        const {
            serviceImage,
            serviceName,
            ServiceSubText,
            serLink
        } = this.props;
        return (
            <>
            <section>
                <div className="technology-odd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 tech-img">
                            { serviceImage!== null &&
                                // <Img sizes={serviceImage.localFile.childImageSharp.sizes} alt="tech_img"  style={{width:`80%`}} />
                                <img src={serviceImage.source_url} alt="Zestard-icon" loading="lazy" />
                            }
                            </div>
                            <div className="col-md-7 col-lg-8 tech-content">
                                <h2 className="title">
                                    <Link to={`/${removePre(serLink)}`}>{serviceName}</Link>
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: ServiceSubText }} />
                                <Link to={`/${removePre(serLink)}`} className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <Footer />
            </>
        )
    }
}


export default Technology