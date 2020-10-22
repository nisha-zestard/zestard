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
                                            {node.node.acf.pf_image_with_responsive.source_url !== null &&
                                                <img src={node.node.acf.pf_image_with_responsive.source_url} alt="Maintain recent work"/>
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