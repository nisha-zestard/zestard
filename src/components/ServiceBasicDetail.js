import React from "react";

const ServiceBasicDetail = (props) => {
  return (
    <section>
        <div className="sub-service-baner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 baner-image-wrap">
                        <div className="image-wrap">
                            {props.headerMascot !== null &&
                                <img src={props.serviceDeail.iwc_image.source_url} alt="" />
                            }											
                        </div>
                    </div>
                    <div className="col-md-6 baner-content-wrap">
                        <div className="content-wrap" dangerouslySetInnerHTML={{__html: props.serviceDeail.iwc_sub_desc}} />											
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default ServiceBasicDetail;