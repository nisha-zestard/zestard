import React, { Component } from "react"
import Layout from "./../components/layout"
import SEO from "../components/seo";


class Contact extends Component {

    render() {

        return (
            <Layout>
                <SEO title="Contact"/>
                <div id="page" className="site-page contact-us">
                    <div className="contact-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="contact-detail-wraper">
                                        <div className="title-wrap">
                                            <h2>Contact Us</h2>
                                            <p>Give us a ring, drop us a line or schedule a free consultation to discuss your exciting ecommerce project.</p>
                                        </div>
                                        <div className="contact-details">
                                            <ul>
                                                <li>
                                                    <h3>Call Us:</h3>
                                                     <p><span>USA:</span><a href="tel:001-(408)940 4509">001-(408)940 4509</a></p>
                                                     <p><span>INDIA:</span><a href="tel:+91 79 - 40320305">+91 79 - 40320305</a></p>
                                                </li>
                                                <li>
                                                    <h3>General:</h3>
                                                    <a href="mailto: info@zestard.com">info@zestard.com</a>
                                                </li>
                                                <li>
                                                    <h3>Jobs:</h3>
                                                    <a href="mailto: hr@zestard.com">hr@zestard.com</a>
                                                </li>
                                                <li>
                                                    <h3>Address</h3>
                                                    <address>501 Saffron Tower, Panchavati Road, Panchavati Society, Gulbai Tekra, Ahmedabad, Gujarat, INDIA - 380006</address>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="contact-form">
                                        <h2 className="title">Talk to Ecommerce Experts</h2>
                                        <div className="form-wrap">
                                            <form>
                                                <div className="form-field">
                                                    <input type="text" name="fullname" id="fullname"  className="form-control" placeholder="Full Name*"/>
                                                </div>
                                                <div className="form-field">
                                                    <input type="email" name="email" id="email"  className="form-control" placeholder="Email*"/>
                                                </div>
                                                <div className="form-field">
                                                    <input type="text" name="Phone" id="phone"  className="form-control" placeholder="Phone*"/>
                                                </div>
                                                <div className="form-field">
                                                    <input type="text" name="Subject" id="subject"  className="form-control" placeholder="Subject*"/>
                                                </div>
                                                <div className="form-field">
                                                    <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message*"></textarea>
                                                </div>
                                                <div className="form-field">
                                                    <button className="btn-primary" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        )
    }

}
export default Contact

