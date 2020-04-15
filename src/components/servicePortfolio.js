// Portfolio section in service technology

import React, { Component } from "react"
import { Link } from "gatsby"
import TechPortfolio from './techportfolio'

class ServicePortfolio extends Component {
    
    render() {
        const {
            portfolioHeading,
            portfolioSubHeading,
            portfolioItem1,
            portfolioItem2
        } = this.props;
        
        return (
            <div>
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
            </div>
        )
    }
}


export default ServicePortfolio

