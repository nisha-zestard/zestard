import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import { removePre } from "../../util/common";
import AboutProject from "../../components/aboutproject";
import Credentials from "../../components/Credentails";
import OurRecentWork from "../../components/OurRecentWork";
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";

class Make extends Component {
	render() {
		const data = this.props.data;
		const pageacf = data.allWpPage.edges[0].node.acf;
		const acfgen = pageacf.gen_content_modules_page;
		const technology = data.allWordpressWpTechnology.edges;
		const credential = acfgen[3].cred_logos_repeater;
		const portfolio = data.allWpCptuiPortfolio.edges;
		const sertech = data.allWpPage.edges[0].node;
		
		return (
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="darkheader" />
				<div className="make-main">
					<ServiceHero
						title={pageacf.header_section_title}
						subText={pageacf.header_sub_text}
						image={pageacf.header_mascot.source_url}
						background={"linear-gradient(-47deg, #0784a5, #03168e)"}
					/>
					<section>
						<div className="make-services">
							<div className="container">
								<ServiceIntro
									title={acfgen[0].pis_page_title}
									sectionTitle={acfgen[0].pis_section_title}
									content={acfgen[0].pis_content}
								/>
								<div className="services-list">
									<div className="row">
										{acfgen[1].cs_cards_details.map((node, index) => (
											<div className="col-lg-3 col-md-6" key={index}>
												<Link to={`/${removePre(node.cs_learn_more_link)}`}>
													<div className="card service-wrap">
														<div className="card-header d-flex">
															<div className="service-icon">
																{node.cs_icon !== null &&
																	<img src={node.cs_icon.source_url} className="main-image" alt="Service icon" />
																}
																{node.cs_hover_icon.source_url !== null &&
																	<img src={node.cs_hover_icon.source_url} className="hover-image" alt="Service hover icon" />
																}
															</div>
															<h2 className="s-title" dangerouslySetInnerHTML={{ __html: node.cs_title }} />
														</div>
														<div className="card-body">
															{node.cs_content !== null &&
																<div className="text" dangerouslySetInnerHTML={{ __html: node.cs_content }} />
															}
															<span className="s-link">Learn More</span>
														</div>
													</div>
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="technology">
							<div className="container">
								<div className="title text-center">
									<h2>Our Technology</h2>
								</div>
								<div className="technology-list">
									<div className="row">
										{technology.map((node, index) => (
											<div className="col-md-6 technology-outer-wrap" key={index}>
												<div className="technology-wrap">
													<div className="icon-wrap">
														{node.node.featured_media.source_url !== null &&
															<img src={node.node.featured_media.source_url} alt={node.node.title + " Technology Logo"} />
														}
													</div>
													<div className="content-wrap">
														<h3>{node.node.title}</h3>
														{node.node.excerpt !== null &&
															<div dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />

														}
														<Link to={`/${removePre(node.node.acf.technology_custom_link)}`}>Learn More</Link>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Credentials section */}
					<Credentials credentials={credential} slidesToShow={5} />
					<OurRecentWork
						title={acfgen[2].css_title}
						content={acfgen[2].css_content}
						portfolio={portfolio}
					/>
					<AboutProject apsiwtch={pageacf.use_common_contact_section} />
				</div>
			</Layout>
		)
	}

}

export default Make;

export const query = graphql`{
	allWpCptuiTechnology(sort: {order: DESC, fields: date}) {
		edges {
		  node {
			title
			excerpt
			featuredImage {
			  node {
				sourceUrl
			  }
			}
			acfTechnologyCustomLink {
			  technologyCustomLink
			}
		  }
		}
	}
	
	allWpPage(filter: {databaseId: {eq: 6956}}) {
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
				genBoxHeading
          		genBoxDescription
			  genContentModules {
				... on WpPage_Acfgenerallayout_GenContentModules_PageBanner {
				  fieldGroupName
				  pbBgImage {
					sourceUrl
				  }
				  pgTitle
				  pgDescription
				}
				... on WpPage_Acfgenerallayout_GenContentModules_GenGridBoxes {
				  genGridBoxTitle
				  genGridBoxesRep {
					genIconGb {
					  sourceUrl
					}
					genHoverIconGb {
					  sourceUrl
					}
					genTitleGb
					genDescriptionGb
				  }
				}
				... on WpPage_Acfgenerallayout_GenContentModules_ClientLogo {
				  clTitle
				  logoRepeater {
					clrImgLogo {
					  sourceUrl
					}
				  }
				}
				... on WpPage_Acfgenerallayout_GenContentModules_CredentialList {
				  listCredential {
					... on WpCptui_credential {
					  id
					  featuredImage {
						node {
						  sourceUrl
						}
					  }
					}
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
					  title
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