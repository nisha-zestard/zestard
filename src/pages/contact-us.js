// Contact us Page

import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"
import PageHeader from './../components/page-header';
import SEO from "../components/seo";
import axios from 'axios'

const validEmailRegex = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
const validPhoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

class ContactUs extends Component {
  
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
    // retrieve all required fields
    // const fields = document.querySelectorAll('.form-field.validate');
    const fields = ['fullname','email','phone','subject'];
    
    // build up the errors object to make one setState call at the end
    const errors = {};
    
    fields.forEach((field) => {
      const value = this.state[field];

    // check for empty data
      if (!value || value === '') {
        errors[field] = "This field cannot be blank.";
      } 
      // check for matching regEx
      if (field === "email") {
        if(!value || value === '') {
          errors.email = "This field cannot be blank.";
        } else if (!value.match(validEmailRegex)) {
          errors.email = "Please enter a valid email address";
        } 
      }
      if (field === "phone") {
        if(!value || value === '') {
          errors.phone = "This field cannot be blank.";
        } else if (!value.match(validPhoneRegex)) {
          errors.phone = "Phone is invalid";
        }
      }
    }); 
   
    this.setState({ errors });
    // check if it's ok to submit the data to the API or not
    return Object.keys(errors).length === 0;
  }
  
  // Change event in input fields

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  // Submit function

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.allFieldsValid()) {
      const { fullname, email, phone, subject,message } = this.state;
      axios.post('https://phptasks.com/zestard-mmm/wp-json/zestard/v1/contact-us', {
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
        console.log(error);
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
    const acfData = data.wordpressPage.acf;
    
    return (
      <Layout>
      <SEO title="Contact us"/>
        <div id="page" className="fffff">
          <div id="content" className="site-content contact">
          {/* page header */}
            <PageHeader
              headerMascot = {acfData.header_mascot}
              headerSubText = {acfData.header_sub_text}
              headerSectionTitle={acfData.header_section_title}
              headerPageTitle={acfData.header_page_title}
            />
            <section>
              <div className="contact-form">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10 col-lg-10 col-sm-11 col-xs-11 col-11 mx-auto card">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-detail col-xs-12">
                          <h2>We'd love to hear from you!</h2>
                          <h4>Brief us your requirements below, and let's connect.</h4>
                          <h3 className={this.state.submitted === true ? 'mail-send' : this.state.submitted === false ? 'mail-failed' : '' } >{this.state.status}</h3>

                          {/* form */}
                          
                          {this.state.submitted === false && 
                          <form method="post" action="#" className="frm_forms" onSubmit={this.handleSubmit} noValidate>
                            <label className="form-group">
                              Full Name <span>*</span>
                              <input type="text" name="fullname" id="fullname" 
                              className="form-control fullname" onChange={this.handleChange} noValidate />
                              {this.state.errors.fullname && 
                              <span className='error'>{this.state.errors.fullname}</span>}
                            </label>
                            <label className="form-group">
                              Email <span>*</span>
                              <input type="email" name="email" id="email" 
                              className="form-control email" onChange={this.handleChange} noValidate />
                              {this.state.errors.email && 
                              <span className='error'>{this.state.errors.email}</span>}
                            </label>
                            <label className="form-group">
                              Phone <span>*</span>
                              <input type="text" name="phone" id="phone" 
                              className="form-control phone" onChange={this.handleChange} noValidate />
                              {this.state.errors.phone && 
                              <span className='error'>{this.state.errors.phone}</span>}
                            </label>
                            <label className="form-group">
                              Subject <span>*</span>
                              <input type="text" name="subject" id="subject" 
                              className="form-control subject" onChange={this.handleChange} noValidate />
                              {this.state.errors.subject && 
                              <span className='error'>{this.state.errors.subject}</span>}
                            </label>
                            <label className="form-group">
                              Message <span>*</span>
                              <textarea name="message" id="message" rows="5" 
                              className="form-control message" onChange={this.handleChange} noValidate />
                              {this.state.errors.message && 
                              <span className='error'>{this.state.errors.message}</span>}
                            </label>
                            <button className="btn-primary" type="submit">Send</button>
                          </form>}
                        </div>
                        <div className="is-submitted">
                        <i aria-hidden="true" className="fa fa-check"></i>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 address-detail col-xs-12">
                        <div dangerouslySetInnerHTML={{ __html: acfData.contact_content_right }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }

}
export default ContactUs

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 57}) {
    title
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
      contact_content_right
      contact_form_area
    }
  }
}
`