// Benefits section in Service technology

import React, { Component } from "react"
import Benefiteicon from '../assets/images/benefite-icon.png';
// import Footer from "./footer";

class ServiceBenefits extends Component {
    
    render() {
        const {
            benefitsHeading,
            benefitsDetails,
        } = this.props;
        return (
            <div>
                <section>
                    <div className="development-benefits">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                                    <h2>Key Benefits of {benefitsHeading}</h2>
                                </div>
                            </div>
                            <div className="benefites-work">
                                <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                                    <div className="row">
                                    {benefitsDetails.tech_key_features_repeater.map(( node, index ) => (
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
                                        key={index}>
                                            <div className="benefites-grp">
                                                <div className="benefites-image">
                                                    <img alt="" src={Benefiteicon} loading="lazy" />
                                                </div>
                                                <span>{node.tech_key_features}</span>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
           
        )
    }
}


export default ServiceBenefits

