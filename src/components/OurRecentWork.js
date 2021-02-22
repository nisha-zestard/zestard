import React from "react";

const OurRecentWork = (props) => {
    return (
        <section>
            <div className="recent-work">
                <div className="container">
                    <div className="title text-center">
                        <h2>{props.title}</h2>
                        <p dangerouslySetInnerHTML={{__html: props.content}} />
                    </div>
                    <div className="portfolio-list">
                        <div className="row">
                            {props.portfolio && props.portfolio.map((node,index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="portfolio-wrap">
                                        <div className="portfolio-image">
                                            {node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl !== null &&
                                                <img src={node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl} alt="Maintain recent work"/>
                                            }													
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default OurRecentWork;