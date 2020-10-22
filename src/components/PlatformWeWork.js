import React from "react";
import { Link } from "gatsby";
import { removePre } from "../util/common";

const PlatformWeWork = (props) => {
    return (
        <section>
            <div className="platform-section">
                <div className="container">
                    <h2 className="section-title text-center">Platforms We Work On</h2>
                    {props.platform.map((node, index) => (
                        <div className={"platform-wrap " + node.iwc_section_class} key={index}>
                            <div className="row">
                                {node.iwc_section_class === 'odd' &&
                                    <div className="col-md-7 platform-image-wrap">
                                        <div className="image text-center">
                                            {node.iwc_image !== null &&
                                                <img src={node.iwc_image.source_url} alt="Platform odd" />
                                            }
                                        </div>
                                    </div>
                                }
                                <div className="col-md-5 platform-content-wrap">
                                    <div className="content-inner">
                                        <div className="p-title d-flex align-items-center">
                                            {node.iwc_icon !== null &&
                                                <img src={node.iwc_icon.source_url} alt="Platform center" />
                                            }
                                            <h4>{node.iwc_title}</h4>
                                        </div>
                                        <div className="p-desc" dangerouslySetInnerHTML={{ __html: node.iwc_sub_desc }} />
                                        <div className="know-more-btn">
                                            <Link to={`/${removePre(node.iwc_button_link)}`}>Know More</Link>
                                        </div>
                                    </div>
                                </div>
                                {node.iwc_section_class === 'even' &&
                                    <div className="col-md-7 platform-image-wrap">
                                        <div className="image text-center">
                                            {node.iwc_image !== null &&
                                                <img src={node.iwc_image.source_url} alt="Plateform even" />
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