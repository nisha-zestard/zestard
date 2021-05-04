import React from "react";
import { Link } from "gatsby";
// import { removePre } from "../util/common";

const PlatformWeWork = (props) => {   
    return (
        <section>
            <div className="platform-section">
                <div className="container">
                    <h2 className="section-title text-center">Platforms We Work On</h2>
                    {props.platform.iwcRepeater.map((node, index) => (
                        <div className={"platform-wrap " + node.iwcSectionClass} key={index}>
                            <div className="row">
                                {node.iwcSectionClass === 'odd' &&
                                    <div className="col-md-7 platform-image-wrap">
                                        <div className="image text-center">
                                            {node.iwcImage !== null &&
                                                <img src={node.iwcImage.sourceUrl} alt="Platform odd" />
                                            }
                                        </div>
                                    </div>
                                }
                                <div className="col-md-5 platform-content-wrap">
                                    <div className="content-inner">
                                        <div className="p-title d-flex align-items-center">
                                            {node.iwcIcon !== null &&
                                                <img src={node.iwcIcon.sourceUrl} alt="Platform center" />
                                            }
                                            <h4>{node.iwc_title}</h4>
                                        </div>
                                        <div className="p-desc" dangerouslySetInnerHTML={{ __html: node.iwcDescription }} />
                                        <div className="know-more-btn">
                                            <Link to={node.iwcButtonLink}>Know More</Link>
                                        </div>
                                    </div>
                                </div>
                                {node.iwcSectionClass === 'even' &&
                                    <div className="col-md-7 platform-image-wrap">
                                        <div className="image text-center">
                                            {node.iwcImage !== null &&
                                                <img src={node.iwcImage.sourceUrl} alt="Plateform even" />
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default PlatformWeWork;