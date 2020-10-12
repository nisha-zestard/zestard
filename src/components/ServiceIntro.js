import React from "react";

const ServiceIntro = (props) => {
  return (
    <div className="services-top">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="title">
            {props.title && (<span>{props.title}</span>)}
            {props.sectionTitle && (<h2>{props.sectionTitle}</h2>)}
          </div>
        </div>
        <div className="col-lg-9 right-wrap">
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: props.content }} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default ServiceIntro;