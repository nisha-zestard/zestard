import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import { removePre } from "../../util/common";
//import AboutProject from "../../components/aboutproject";
import Credentials from "../../components/Credentails";
import OurRecentWork from "../../components/OurRecentWork";
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";
import CommonContactImage from '../../assets/images/Mascot.png';

class Make extends Component {
	render() {
		const data = this.props.data;		
		const pageacf = data.allWpPage.edges[0].node.acfHeader;
		const acfgen = data.allWpPage.edges[0].node.acfGeneralLayout;
		const acfconmod = acfgen.genContentModules;		
		const technology = data.allWpCptuiTechnology.edges;
		const credential = acfconmod[2].listCredential;
		const portfolio = acfconmod[3];
		const sertech = data.allWpPage.edges[0].node.seo;
		
		return (
			<Layout>
				<SEO title={sertech.title} description={sertech.metaDesc} />
				<Header headernavclass="darkheader" />
				<div className="make-main">
					<ServiceHero
						title={pageacf.headerSectionTitle}
						subText={pageacf.headerSubText}
						image={pageacf.headerMascot.sourceUrl}
						background={"linear-gradient(-47deg, #0784a5, #03168e)"}
					/>
					<section>
						<div className="make-services">
							<div className="container">
								<ServiceIntro
									title={acfgen.genBoxHeading}
									sectionTitle=""
									content={acfgen.genBoxDescription}
								/>
								<div className="services-list">
									<div className="row">
										{acfconmod[1].genGridBoxesRep.map((node, index) => (
											<div className="col-lg-3 col-md-6" key={index}>
												<Link to={`${removePre(node.genButtonLink)}`}>
													<div className="card service-wrap">
														<div className="card-header d-flex">
															<div className="service-icon">
																{node.genIconGb.sourceUrl !== null &&
																	<img src={node.genIconGb.sourceUrl} className="main-image" alt="Service icon" />
																}
																{node.genHoverIconGb.sourceUrl !== null &&
																	<img src={node.genHoverIconGb.sourceUrl} className="hover-image" alt="Service hover icon" />
																}
															</div>
															<h2 className="s-title" dangerouslySetInnerHTML={{ __html: node.genTitleGb }} />
														</div>
														<div className="card-body">
															{node.genDescriptionGb !== null &&
																<div className="text" dangerouslySetInnerHTML={{ __html: node.genDescriptionGb }} />
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
														{node.node.featuredImage.node !== null &&
															<img src={node.node.featuredImage.node.sourceUrl} alt={node.node.title + " Technology Logo"} />
														}
													</div>
													<div className="content-wrap">
														<h3>{node.node.title}</h3>
														{node.node.excerpt !== null &&
															<div dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />

														}
														<Link to={`/${removePre(node.node.acfTechnologyCustomLink.technologyCustomLink)}`}>Learn More</Link>
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
						title={portfolio.orwTitle}
						content={portfolio.orwSubTitle}
						portfolio={portfolio.orwPortfolioList}
					/>

					<div className="footer-contactus text-center">
						<div className="container">
							<div className="footer-contactus-inner">
								<div className="contcta-image">								
									<img src={CommonContactImage} alt="Tell us about your project banner"/>								                      
								</div>
								<div className="content">
									<h2>{acfconmod[4].ccfpTitle}</h2>
									{acfconmod[4].ccfpSubTitle !== null &&
									<div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{__html: acfconmod[4].ccfpSubTitle}} />
									}                        
									<Link to={`/${removePre(acfconmod[4].ccfpButtonLink)}`} className="start-pro-btn">{acfconmod[4].ccfpButtonText}</Link>
								</div>
							</div>
						</div>
					</div>
					{/* <AboutProject apsiwtch={acfconmod[4]} /> */}
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
					genButtonText
                	genButtonLink
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