import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
// import { removePre } from './../../util/common'
import Testimonials from "../../components/TestiMonials";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import OurRecentWork from "../../components/OurRecentWork";

class ReactjsDevelopment extends Component {
	render() {		
		const data = this.props.data; 
		const seodata = data.allWpPage.edges[0].node.seo;
		const acfdata =data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules;
		const banner = acfdata[0];
		const services = acfdata[1];
		const testimonial = data.allWpCptuiTestimonial.edges;
		const recentwork = acfdata[2];
		const contactus = acfdata[3];
		
		return(
			<Layout>
				<SEO title={seodata.title} description={seodata.metaDesc}/>
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<ServiceDetailHeader title={data.allWpPage.edges[0].node.title} />
					<ServiceBasicDetail
						headerMascot={banner.genTwoSecImage.sourceUrl}
						serviceDeail={banner.genRightDescription}
					/>
					<section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">{services.genGridBoxTitle}</h2>
								<div className="services-list">
									<div className="row">
									{services.genGridBoxesRep.map((node,index) => (
											<div className="col-md-6 col-lg-4" key={index}>
												<div className="service-box">
													<div className="ss-title">
														<h2 dangerouslySetInnerHTML={{__html: node.genTitleGb}} />
													</div>
													<div className="ss-content" dangerouslySetInnerHTML={{__html: node.genDescriptionGb}} />													
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
						title={recentwork.orwTitle}
						content={recentwork.orwSubTitle}
						portfolio={recentwork.orwPortfolioList}
					/>
				</div>

				<AboutProject comcontact={contactus} />
			
	  </Layout>
		)
	}

}
export default ReactjsDevelopment

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
	allWpPage(filter: {databaseId: {eq: 7446}}) {
		edges {
			node {
				title
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