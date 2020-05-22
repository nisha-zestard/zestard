// Technology section in service technology

import React, { Component } from "react"
import Footer from "./footer";

class ServiceTechnology extends Component {
    
    render() {
        const {
            techHeading,
            techContent,
            techContentRight
        } = this.props;
        
        return (
            <div>
                <section>
                    <div className="development-desc">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 col-12">
                                    <h2>{techHeading}</h2>
                                    <div className="about-tech" 
                                        dangerouslySetInnerHTML={{ __html: techContent }} />
                                    </div>
                                    <div id="right-desc" 
                                    className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 col-12"
                                    dangerouslySetInnerHTML={{ __html: techContentRight }}
                                    />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}


export default ServiceTechnology

