import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import Testimonials from "../../components/TestiMonials";
// import { removePre } from './../../util/common'
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import OurRecentWork from "../../components/OurRecentWork";

class MagentoDevelopment extends Component {
	render() {		
		const data = this.props.data  
		const sertech = data.allWpPage.edges[0].node;
		const acf = data.allWpPage.edges[0].node.acf
		const pagedata = acf.gen_content_modules_page
		// const platform = pagedata[2].iwc_layout_details
		const testimonial = data.allWpCptuiTechnology.edges;
		const portfolio = data.allWpCptuiPortfolio.edges;
		
		//console.log(acf);
		return(
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content}/>
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<ServiceDetailHeader title={pagedata[0].iwc_layout_details[0].iwc_title} />
					<ServiceBasicDetail
						headerMascot={acf.header_mascot}
						serviceDeail={pagedata[0].iwc_layout_details[0]}
					/>
					<section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">{pagedata[1].cs_section_title}</h2>
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
					</section>
					{/* Testimonials section */}
					<Testimonials testimonial={testimonial} />
					{/* <section>
						<div className="platform-section">
							<div className="container">
								<h2 className="section-title text-center">Platforms We Work On</h2>
								{platform.map((node,index) => (
									<div className={"platform-wrap "+node.iwc_section_class} key={index}>
										<div className="row">
											{node.iwc_section_class === 'odd' &&
												<div className="col-md-7 platform-image-wrap">
													<div className="image text-center">
														{node.iwc_image !== null &&
															<img src={node.iwc_image.source_url} alt="Platform odd"/>
														}
													</div>
												</div>
											}											
											<div className="col-md-5 platform-content-wrap">
												<div className="content-inner">
													<div className="p-title d-flex align-items-center">
														{node.iwc_icon !== null &&
															<img src={node.iwc_icon.source_url} alt="Platform center" />
														}
														<h4>{node.iwc_title}</h4>
													</div>
													<div className="p-desc" dangerouslySetInnerHTML={{__html: node.iwc_sub_desc}} />														
													<div className="know-more-btn">
														<Link to={`/${removePre(node.iwc_button_link)}`}>Know More</Link>
													</div>
												</div>
											</div>
											{node.iwc_section_class === 'even' &&
												<div className="col-md-7 platform-image-wrap">
													<div className="image text-center">
														{node.iwc_image !== null &&
															<img src={node.iwc_image.source_url} alt="Plateform even" />
														}
													</div>
												</div>
											}
										</div>
									</div>
								))}
							</div>
						</div>
					</section> */}
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
export default MagentoDevelopment

export const query = graphql`
{
	allWpPage(filter: {databaseId: {eq: 128}}) {
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