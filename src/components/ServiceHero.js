import React from "react";

const ServiceHero = (props) => {
    return (
        <section>
            <div className="page-banner" style={{ background: props.background }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 banner-content-wrap d-flex align-items-center">
                            <div className="banner-content">
                                <h1 dangerouslySetInnerHTML={{ __html: props.title }}/>
                                <p dangerouslySetInnerHTML={{__html : props.subText }} />
                            </div>
                        </div>
                        <div className="col-md-6 banner-image-wrap">
                            <div className="banner-image">
                                {props.image !== null &&
                                    <img src={props.image}  alt="Make Banner"/>
                                }										
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServiceHero;