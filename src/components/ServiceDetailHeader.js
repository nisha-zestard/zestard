import React from "react";
import { Link } from "gatsby";

const ServiceDetailHeader = (props) => {
  return (
    <section>
      <div className="sub-services-breadcums">
        <div className="container">
          <div className="breadcums-inner">
            <div className="page-title">
              <h1>{props.title}</h1>
            </div>
            <div className="breadcums-wrap">
              <ul className="d-flex justify-content-center m-0 p-0">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">{props.title}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ServiceDetailHeader;