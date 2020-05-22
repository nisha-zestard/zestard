// Technology part of a Service

import React, { Component } from "react"
import Footer from "./footer";
import ServiceTechnology from './serviceTechnology'
import ServiceServices from "./serviceServices";
import ServicePortfolio from "./servicePortfolio";
import ServiceBenefits from "./serviceBenefits";

class ServiceTech extends Component {
    
    render() {
        const {
            sections
        } = this.props;
        const tech = sections.childWordPressAcfTechAboutTechnology;
        const service = sections.childWordPressAcfTechServices;
        const portfolio = sections.childWordPressAcfTechPortfolio;
        const benefits = sections.childWordPressAcfTechKeyBenefits;
        return (
            <div>
                {tech !== null &&
                    <ServiceTechnology 
                        techHeading = {tech.tech_about_heading}
                        techContent = {tech.tech_about_content}
                        techContentRight = {tech.tech_about_right_content}
                    />
                }
                {service !== null && 
                    <ServiceServices 
                        serviceDetails = {service}
                        serviceHeading = {service.tech_services_heading}
                        serviceSubHeading = {service.tech_sub_heading}
                    />
                }
                {portfolio !== null &&
                    <ServicePortfolio 
                        portfolioHeading = {portfolio.tech_portfolio_heading}
                        portfolioLink = {portfolio.tech_portfolio_link}
                        portfolioSubHeading = {portfolio.tech_portfolio_sub_heading}
                        portfolioItem1 = {portfolio.tech_portfolio_item1}
                        portfolioItem2 = {portfolio.tech_portfolio_item2}
                    />
                }
                {benefits !== null &&
                    <ServiceBenefits 
                        benefitsHeading = {benefits.tech_keyb_heading}
                        benefitsDetails = {benefits}
                    />
                }
                <Footer />
            </div>
        )
    }
}


export default ServiceTech