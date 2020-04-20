import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  return(
    <footer className="site-footer">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-col-left">
              <div className="f-left-top">
                <div className="footer-logo">
                  {/* <img src="assets/images/logo-white.png" /> */}
                </div>
                <div className="contact-info">
                  <ul className="m-0 p-0">
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <a href="mailto:info@zestard.com">info@zestard.com</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <a href="mailto:info@zestard.com">info@zestard.com</a>									
                    </li>
                  </ul>
                </div>
                <div className="company-ratings">
                  <div className="figure">
                    {/* <img src="assets/images/rating.png"> */}
                  </div>
                  <p className="m-0">4.6 out of 5.0 for Zestard Technologies by 39 clients reviews.</p>
                </div>
              </div>
              <div className="socials">
                <ul className="p-0 m-0">
                  <li>  
                    <a href="javascript:;"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="javascript:;"><i className="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="javascript:;"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="javascript:;"><i className="fa fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="footer-col-right">
              <div className="f-right-top">
                <div className="row">
                  <div className="col-sm-4 footer-col">
                    <div className="footer-col-inner">
                      <h3 className="s-title">Make</h3>
                      <ul className="m-0 p-0 s-list">
                        <li><a href="javascript:;">Ecommerce Development</a></li>
                        <li><a href="javascript:;">Wordpress Development</a></li>
                        <li><a href="javascript:;">React JS</a></li>
                        <li><a href="javascript:;">Node JS</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 footer-col">
                    <div className="footer-col-inner">
                      <h3 className="s-title">Market</h3>
                      <ul className="m-0 p-0 s-list">
                        <li><a href="javascript:;">SEO Services</a></li>
                        <li><a href="javascript:;">Link Building</a></li>
                        <li><a href="javascript:;">Social Media Marketing</a></li>
                        <li><a href="javascript:;">PPC / Adwords</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 footer-col">
                    <div className="footer-col-inner">
                      <h3 className="s-title">Maintain</h3>
                      <ul className="m-0 p-0 s-list">
                        <li><a href="javascript:;">Magento Maintenance</a></li>
                        <li><a href="javascript:;">WordPress Maintenance</a></li>
                        <li><a href="javascript:;">Shopify Maintenance</a></li>
                        <li><a href="javascript:;">Hire Dedicated Developers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="f-right-bottom"> 
                <ul className="f-menu m-0 p-0 d-flex">
                  <li><a href="javascript:;">About</a></li>
                  <li><a href="javascript:;">Blog</a></li>
                  <li><a href="javascript:;">Case Studies</a></li>
                  <li><a href="javascript:;">Careers</a></li>
                  <li><a href="javascript:;">Contact</a></li>
                  <li><a href="javascript:;">Testimonials</a></li>
                  <li><a href="javascript:;">Partnership</a></li>
                </ul>
              </div>
              <div className="footer-creadientials">
                <ul className="p-0 m-0 d-flex justify-content-center">
                  <li>
                    {/* <img src="assets/images/m-extension.png" alt=""> */}
                  </li>
                  <li>
                    {/* <img src="assets/images/Shopify-app.png" alt=""> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-7">
            <div className="copyright-text">
              <p className="m-0">© 2010 - 2020 Zestard Technologies Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-5">
            <div className="bottom-link">
              <ul className="m-0 p-0 d-flex justify-content-end">
                <li><a href="javascript:;">Privacy Policy</a></li>
                <li><a href="javascript:;">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>   
  )  
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
