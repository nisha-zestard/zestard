// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/images/Logo.png"

const Header = ({ siteTitle }) => (
  <header className="site-header">    
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="site-branding">
              <img src={Logo} alt="Site Logo Image" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="site-nav d-flex justify-content-end align-items-center">
              <ul className="nav">
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <div className="request-a-quote">
                <a href="#" className="btn-primary">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
