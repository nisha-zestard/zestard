import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
import SEO from "../components/seo";
import Header from "./../components/header";
import axios from 'axios'

const validEmailRegex = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
const validPhoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      status: "",
      fullname: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
      errors: {
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }
    };
  }

  allFieldsValid() {        
    const fields = ['fullname','email','phone','subject','message'];       
    const errors = {};        
    fields.forEach((field) => {
      const value = this.state[field];       
      if (!value || value === '') {
        errors[field] = "This field cannot be blank.";
      }            
      if (field === "email") {
        if(!value || value === '') {
          errors.email = "This field cannot be blank.";
        } else if (!value.match(validEmailRegex)) {
          errors.email = "Please enter a valid email address";
        } 
      }
      // if (field === "phone") {
      //   if(!value || value === '') {
      //     errors.phone = "This field cannot be blank.";
      //   } 
      //   else if (!value.match(validPhoneRegex)) {
      //     errors.phone = "Phone is invalid";
      //   }
      // }
    });      
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      console.log(value);
      this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.allFieldsValid()) {
      const { fullname, email, phone, subject,message } = this.state;
      axios.post('https://phptasks.com/zestard-mmm/wp-json/zestard/v1/contact', {
        'fullname': fullname,
        'email': email,
        'phone': phone,
        'subject': subject,
        'message': message  
      })
      .then((response) => {            
        this.setState({
          submitted: true,
          status: "Thank you. We've received your Inquiry. We'll get back to you soon."
        });
      })
      .catch((error) => {
        console.log("error---"+error);
      });
    } else {
      this.setState({
        submitted: false,
        status: "There was a problem with your submission. Errors are marked below."
      });
    }
  }


  render() {
    const data = this.props.data
    const acfoption = data.allWordpressAcfOptions.edges[0].node.options
    
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
                          {this.state.submitted === false && 
                            <form method="post" action="#" className="frm_forms" onSubmit={this.handleSubmit} noValidate>
                              <div className="form-field">
                                <input type="text" name="fullname" id="fullname"  className="form-control" placeholder="Full Name*" onChange={this.handleChange} noValidate/>
                                  {this.state.errors.fullname && 
                                      <span className='error'>{this.state.errors.fullname}</span>
                                  }
                              </div>
                              <div className="form-field">
                                <input type="email" name="email" id="email"  className="form-control" placeholder="Email*" onChange={this.handleChange} noValidate />
                                  {this.state.errors.email && 
                                      <span className='error'>{this.state.errors.email}</span>
                                  }
                              </div>
                              <div className="form-field">
                                <input type="text" name="phone" id="phone"  className="form-control" placeholder="Phone*" onChange={this.handleChange} />
                                  {this.state.errors.phone && 
                                      <span className='error'>{this.state.errors.phone}</span>
                                  }
                              </div>
                              <div className="form-field">
                                <input type="text" name="subject" id="subject"  className="form-control" placeholder="Subject*" onChange={this.handleChange} />
                                  {this.state.errors.subject && 
                                      <span className='error'>{this.state.errors.subject}</span>
                                  }
                              </div>
                              <div className="form-field">
                                <textarea name="message" id="message" rows="5" className="form-control" placeholder="Message*" onChange={this.handleChange} noValidate ></textarea>
                                  {this.state.errors.message && 
                                      <span className='error'>{this.state.errors.message}</span>
                                  }
                              </div>
                              <div className="form-field">
                                <button className="btn-primary" type="submit">Submit</button>
                              </div>
                            </form>
                          }

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