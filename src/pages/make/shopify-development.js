import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../../components/layout"
import Header from "../../components/header";
import SEO from "./../../components/seo";
import Testimonials from "../../components/TestiMonials";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import OurRecentWork from "../../components/OurRecentWork";

class EcommerceDevelopment extends Component {
  render() {
    const data = this.props.data;
    const acf = data.wpPage.acf.gen_content_modules_page;
    const tellus = data.wpPage.acf;
    const banner = acf[0].iwc_layout_details[0];
    const services = acf[1].cs_cards_details;
    const testimonial = data.allWpCptuiTechnology.edges;
    const sertech = data.wpPage  
    const portfolio = data.allWpCptuiPortfolio.edges;

    return (
      <Layout>
        <SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
        <Header headernavclass="lightheader" />
        <div id="page" className="ui-ux-development">
          <ServiceDetailHeader title={'Shopify development'} />
          <ServiceBasicDetail
						headerMascot={banner.iwc_image}
						serviceDeail={banner}
					/>
          <section>
            <div className="ecommerce-sercices-wrap">
              <div className="container">
                <h2 className="section-title text-center">{acf[1].cs_section_title}</h2>
                <div className="services-list">
                  <div className="row">
                    {services.map((node, index) => (
                      <div className="col-md-6 col-lg-4">
                        <div className="service-box">
                          <div className="ss-title">
                            <h2 dangerouslySetInnerHTML={{ __html: node.cs_title }} />
                          </div>
                          <div className="ss-content" dangerouslySetInnerHTML={{ __html: node.cs_content }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials section */}
          <Testimonials testimonial={testimonial} />
          <OurRecentWork
						title={acf[2].css_title}
						content={acf[2].css_content}
						portfolio={portfolio}
					/>
          <AboutProject
            apsiwtch={tellus.use_common_contact_section}
            apimage={tellus.tuabp_image}
            aptitle={tellus.tuabp_title}
            apcontent={tellus.tuabp_content}
            apbuttontext={tellus.tuabp_button_text}
            apbuttonlink={tellus.tuabp_button_link} />
        </div>
      </Layout>
    )
  }

}

export default EcommerceDevelopment;

export const query = graphql`
{
  allWpPage(filter: {databaseId: {eq: 7511}}) {
		edges {
			node {
				seo {
					title
					metaDesc
				}
				acfHeader {
					headerPageTitle
					headerSectionTitle
					headerSubText
					homeMascotClass
					headerMascot {
						sourceUrl
					}
				}
				acfGeneralLayout {
					genContentModules {
					  ... on WpPage_Acfgenerallayout_GenContentModules_GenLeftImageAndRightDescription {
						genTwoSecImage {
						  sourceUrl
						}
						genRightHeading
						genRightDescription
					  }
					  ... on WpPage_Acfgenerallayout_GenContentModules_GenGridBoxes {
						genGridBoxTitle
						genGridBoxesRep {
						  genButtonText
						  genDescriptionGb
						}
					  }
					  ... on WpPage_Acfgenerallayout_GenContentModules_OurRecentWork {
						orwTitle
						orwSubTitle
						orwPortfolioList {
						  ... on WpCptui_portfolio {
							id
							acfPortfolioLayout {
							  pfImageWithResponsive {
								sourceUrl
							  }
							}
						  }
						}
					  }
					  ... on WpPage_Acfgenerallayout_GenContentModules_ContactUsForProject {
						ccfpTitle
						ccfpSubTitle
						ccfpButtonText
						ccfpButtonLink
					  }
					}
				  }			  
			}
		  }
	  }
}`
