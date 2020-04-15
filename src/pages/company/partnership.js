// Partnership Page

import React, { Component } from "react"
import { graphql } from "gatsby"
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";

class Partnership extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      const offshore = data.wordpressPage.acf.gen_content_modules_page[0];
      const referral = data.wordpressPage.acf.gen_content_modules_page[2];
      const reseller = data.wordpressPage.childWordPressAcfGenLeftImageAndRightDescription;
      const metadata = data.wordpressPage.yoast_meta[0].content;
      return (
        <>
          <SEO title = {data.wordpressPage.yoast_title} description={metadata} />
          <div id="page" className="site ">
            <div id="content" className="site-content">
              {/* page header */}
              <PageHeader
                headerMascot = {acfData.header_mascot}
                headerSubText = {acfData.header_sub_text}
                headerSectionTitle={acfData.header_section_title}
                headerPageTitle={acfData.header_page_title}
              />
              {/* partnership */}
              <section>
                <div className="partner-type  offshare">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{offshore.gen_left_heading}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: offshore.gen_left_description }}
                        />
                      </div>
                      <div className="col-md-5 col-lg-5">
                        {offshore.gen_two_sec_image !== null &&
                         <img src={offshore.gen_two_sec_image.source_url} alt="" loading="lazy" />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="partner-type reseller">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 col-lg-5">
                        {reseller.gen_two_sec_image !== null &&
                            <img src={reseller.gen_two_sec_image.source_url} alt="" loading="lazy" />
                        }
                      </div>
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{reseller.gen_right_heading}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: reseller.gen_right_description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="partner-type referral">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{referral.gen_left_heading}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: referral.gen_left_description }}
                        />
                      </div>
                      <div className="col-md-5 col-lg-5">
                        {referral.gen_two_sec_image !== null &&
                            <img src={referral.gen_two_sec_image.source_url} alt="" loading="lazy" />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
        )
  }

}
export default Partnership

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 103}) {
    title
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
      gen_content_modules_page {
        ... on WordPressAcf_gen_right_image_and_left_description {
          gen_left_description
          gen_left_heading
          gen_two_sec_image {
            source_url
          }
        }
      }
    }
    childWordPressAcfGenLeftImageAndRightDescription {
      gen_right_heading
      gen_right_description
      gen_two_sec_image {
        source_url
      }
    }
  }
}
`