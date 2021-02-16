import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import PlatformWeWork from "../../components/PlatformWeWork";
import OurRecentWork from "../../components/OurRecentWork";

class WordpressDevelopment extends Component {
	render() {
		const data = this.props.data;
		const acf = data.allWpPage.edges[0].node.acf;
		const pagedata = acf.gen_content_modules_page;
		const platform = pagedata[1].iwc_layout_details;
		const sertech = data.allWpPage.edges[0].node;
		const portfolio = data.allWpCptuiPortfolio.edges;

		return (
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<ServiceDetailHeader title={'Website Development'} />
					<ServiceBasicDetail
						headerMascot={acf.header_mascot}
						serviceDeail={pagedata[0].iwc_layout_details[0]}
					/>
					{/* <section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">Our Website Services</h2>
								<div className="services-list">
									<div className="row">
									{pagedata[1].cs_cards_details.map((node,index) => (
											<div className="col-md-6 col-lg-4" key={index}>
												<div className="service-box">
													<div className="ss-title">
														<h2 dangerouslySetInnerHTML={{__html: node.cs_title}} />
													</div>
													<div className="ss-content" dangerouslySetInnerHTML={{__html: node.cs_content}} />													
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section> */}
					<PlatformWeWork platform={platform} />
					<OurRecentWork
						title={pagedata[2].css_title}
						content={pagedata[2].css_content}
						portfolio={portfolio}
					/>
				</div>
				<AboutProject
					apsiwtch={acf.use_common_contact_section}
					apimage={acf.tuabp_image}
					aptitle={acf.tuabp_title}
					apcontent={acf.tuabp_content}
					apbuttontext={acf.tuabp_button_text}
					apbuttonlink={acf.tuabp_button_link} />
			</Layout>
		)
	}

}
export default WordpressDevelopment;

export const query = graphql`
{
	allWpPage(filter: {databaseId: {eq: 7271}}) {
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