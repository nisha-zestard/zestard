import React, { Component } from "react"
import Layout from "./../components/layout"
import SEO from "../components/seo";
import Header from "./../components/header";


class Contact extends Component {

    render() {
        const data = this.props.data
        const acfoption = data.allWordpressAcfOptions.edges[0].node.options
        console.log(data);
        return (
            <Layout>
                <SEO title="Contact"/>
                <Header headernavclass="lightheader" />
                <div id="page" className="site-page contact-us">
                    <div className="contact-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="contact-detail-wraper"dangerouslySetInnerHTML = {{ __html: acfoption.cd_content }} />
                                    
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

export const query = graphql`
{
    allWordpressAcfOptions {
        edges {
          node {
            options {
              cd_content
            }
          }
        }
    }
}
`