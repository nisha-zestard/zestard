import React, { Component } from "react"

class MakeServices extends Component {
    render() {
        const {
            cwimgClass,
            cwimgMascot,
            cwimgSubText,
            cwimgSectionTitle,
            cwimgPageTitle,
            cwimgSerboxTitle,
            cwimgSBITitle,
        } = this.props;
        return (
            <div id="page" className={cwimgClass}>
                <section>
                    <div className="sub-service-baner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 baner-image-wrap">
                                    <div className="image-wrap">
                                        {cwimgMascot !== null &&
                                            <img src={cwimgMascot.source_url} alt="Make service box" />
                                        }											
                                    </div>
                                </div>
                                <div className="col-md-6 baner-content-wrap">
                                    <div className="content-wrap" dangerouslySetInnerHTML={{__html: cwimgSubText}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="ecommerce-sercices-wrap">
                        <div className="container">
                            <h2 className="section-title text-center">{cwimgSerboxTitle}</h2>
                            <div className="services-list">
                                <div className="row">
                                    {/* {services.map((node, index) => (
                                        <div className="col-md-6 col-lg-4">
                                            <div className="service-box">
                                                <div className="ss-title">
                                                    <h2 dangerouslySetInnerHTML={{__html: node.cs_title}} />
                                                </div>
                                                <div className="ss-content" dangerouslySetInnerHTML={{__html: node.cs_content}} />													
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default MakeServices