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
	const seodata = data.allWpPage.edges[0].node.seo;
	const acfgenlayout = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules;
	const services = acfgenlayout[1].genGridBoxesRep;
	const testimonial = data.allWpCptuiTestimonial.edges;

    return (
      <Layout>
        <SEO title={seodata.title} description={seodata.metaDesc} />
        <Header headernavclass="lightheader" />
        <div id="page" className="ui-ux-development">
          <ServiceDetailHeader title={'Shopify development'} />
          <ServiceBasicDetail
				headerMascot={acfgenlayout[0].genTwoSecImage.sourceUrl}
				serviceDeail={acfgenlayout[0].genRightDescription}
			/>
          <section>
            <div className="ecommerce-sercices-wrap">
              <div className="container">
                <h2 className="section-title text-center">{acfgenlayout[1].genGridBoxTitle}</h2>
                <div className="services-list">
                  <div className="row">
                    {services.map((node, index) => (
                      <div className="col-md-6 col-lg-4">
                        <div className="service-box">
                          <div className="ss-title">
                            <h2 dangerouslySetInnerHTML={{ __html: node.genTitleGb }} />
                          </div>
                          <div className="ss-content" dangerouslySetInnerHTML={{ __html: node.genDescriptionGb }} />
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
			title={acfgenlayout[2].orwTitle}
			content={acfgenlayout[2].orwSubTitle}
			portfolio={acfgenlayout[2].orwPortfolioList}
		/>

			<AboutProject comcontact={acfgenlayout[3]} />
          {/* <AboutProject
            apsiwtch={tellus.use_common_contact_section}
            apimage={tellus.tuabp_image}
            aptitle={tellus.tuabp_title}
            apcontent={tellus.tuabp_content}
            apbuttontext={tellus.tuabp_button_text}
            apbuttonlink={tellus.tuabp_button_link} /> */}
        </div>
      </Layout>
    )
  }

}

export default EcommerceDevelopment;

export const query = graphql`
{
	allWpCptuiTestimonial {
        edges {
          node {
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
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
							genTitleGb
						  genDescriptionGb
						}
					  }
					  ... on WpPage_Acfgenerallayout_GenContentModules_OurRecentWork {
						orwTitle
						orwSubTitle
						orwPortfolioList {
						  ... on WpCptuiPortfolio {
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
