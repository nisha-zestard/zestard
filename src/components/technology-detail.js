// Service Technology Layout

import React, { Component } from "react"
import { Link } from "gatsby"
import TechPortfolio from './techportfolio'
import Footer from "./footer";
import Benefiteicon from '../assets/images/benefite-icon.png';

class TechnologyDetail extends Component {
    
    render() {
       
        const {
                techHeading,
                techContent,
                techContentRight,
                serviceDetails,
                serviceHeading,
                serviceSubHeading,
                portfolioHeading,
                portfolioLink,
                portfolioSubHeading,
                portfolioItem1,
                portfolioItem2,
                benefitsHeading,
                benefitsDetails,
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
                <section>
                    <div className="development-project">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <TechPortfolio 
                                        item1 = {portfolioItem1}
                                        item2 = {portfolioItem2}
                                    />
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12 col-12"></div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                                    <h2>{portfolioHeading}</h2>
                                    <p>{portfolioSubHeading}</p>
                                    <Link className="btn btn-primary" to="/portfolio/all-portfolio">
                                        Browse Our Portfolio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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


export default TechnologyDetail

