// Services section in service technology

import React, { Component } from "react"
import Footer from "./footer";

class ServiceServices extends Component {
    
    render() {
        const {
            serviceDetails,
            serviceHeading,
            serviceSubHeading
        } = this.props;
        
        return (
            <div>
                <section>
                    <div className="development-service">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                    <h2>{serviceHeading}</h2>
                                    <h6 dangerouslySetInnerHTML={{ __html: serviceSubHeading }} />
                                </div>
                            </div>
                            <div className="row">
                            {serviceDetails.tech_services_list.map(( node, index ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mobile mb-5"
                                key={index}>
                                    <div className="info">
                                        <div className="head">
                                            <h3 className="title">{node.tech_service_name}</h3>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: node.tech_service_description }} />
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section> 
                <Footer />
            </div>
        )
    }
}


export default ServiceServices

