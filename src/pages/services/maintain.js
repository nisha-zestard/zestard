import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "./../../components/layout";
import Header from "./../../components/header";
import { removePre } from "./../../util/common";
import SEO from "./../../components/seo";
import AboutProject from "./../../components/aboutproject";
import Credentials from "../../components/Credentails";
import OurRecentWork from '../../components/OurRecentWork';
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";

class Maintain extends Component {
	render() {
		const data = this.props.data;		
		const sertech = data.allWpPage.edges[0].node.seo;
		const bannerdata = data.allWpPage.edges[0].node.acfHeader;
		const genmodule = data.allWpPage.edges[0].node.acfGeneralLayout;
		const hiredev = data.allWpPage.edges[0].node.acfMaintainLayout;
		const credent = genmodule.genContentModules[2].listCredential;
		
		return(
			<Layout>
				<SEO title={sertech.title} description={sertech.metaDesc} />
				<Header headernavclass="darkheader" />
				<div className="maintain-main">
				<ServiceHero
					title={bannerdata.headerSectionTitle}
					subText={bannerdata.headerSubText}
					image={bannerdata.headerMascot.sourceUrl}
					background={"linear-gradient(47deg,#2a0845 1%,#6441a5)"}
				/>
				<section>
					<div className="make-intro-section text-left">
						<div className="container">
							<ServiceIntro
								sectionTitle={genmodule.genBoxHeading}
								content={genmodule.genBoxDescription}
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="maintain-services">
						<div className="container">
							{genmodule.genContentModules[1].iwcRepeater.map((node,index) => (
								<div className={index % 2 === 0? 'maintain-service-wrap odd' : 'maintain-service-wrap even'} key={index}>
									<div className="row">
										{index % 2 === 1 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwcImage.sourceUrl !== null &&
														<img src={node.iwcImage.sourceUrl}  alt="Service icon"/>
													}													
												</div>
											</div>
										}
										<div className="col-md-6 maintain-service-content">
											<div className="ser-contain">
												<h2 className="service-title" dangerouslySetInnerHTML={{__html: node.iwcTitle}} />
												<div className="ser-image">
													{node.iwcImage.sourceUrl !== null &&
														<img src={node.iwcImage.sourceUrl}  alt="Service icon"/>
													}													
												</div>
												{node.iwcDescription !== null &&
													<div className="service-text" dangerouslySetInnerHTML={{__html: node.iwcDescription}} />
												}
												<Link to={node.iwcButtonLink} className="service-link">{node.iwcButtonText}</Link>
											</div>
										</div>
										{index % 2 === 0 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwcImage.sourceUrl !== null &&
														<img src={node.iwcImage.sourceUrl}  alt="Service icon"/>
													}													
												</div>
											</div>
										}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section>
					<div className="hire-developers-section">
						<div className="container">
							<div className="hire-developers-inner">
								<div className="row">
									<div className="col-lg-6">
										<div className="hire-dev-image">
											{hiredev.maintainImage.sourceUrl !== null &&
												<img src={hiredev.maintainImage.sourceUrl} alt="Hire developers"/>
											}											
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hire-dev-content">
											<h2 className="hire-dev-title">{hiredev.maintainTitle}</h2>
											<div className="hire-dev-image">
												{hiredev.maintainImage.sourceUrl !== null &&
													<img src={hiredev.maintainImage.sourceUrl} alt="Hire developers"/>
												}											
											</div>
											<div className="hire-dev-text">
												{hiredev.maintainContent !== null &&
													<p dangerouslySetInnerHTML={{__html: hiredev.maintainContent}} />
												}												
												<ul>
													{hiredev.maintainListRepeater.map((node,index) => (
														<li key={index}>{node.maintainList}</li>
													))}
												</ul>
												<Link to={`/${removePre(hiredev.maintainButtonLink)}`}>{hiredev.maintainButtonText}</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Credentials section */}
				<Credentials credentials={credent} slidesToShow={5} />

				<OurRecentWork
					title={genmodule.genContentModules[3].orwTitle}
					content={genmodule.genContentModules[3].orwSubTitle}
					portfolio={genmodule.genContentModules[3].orwPortfolioList}
				/>

				<AboutProject comcontact={genmodule.genContentModules[4]} />
				</div>
			</Layout>
		)
	}
}

export default Maintain;

export const query = graphql`{
	
	allWpPage(filter: {databaseId: {eq: 6981}}) {
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
			acfMaintainLayout {
			  maintainImage {
				sourceUrl
			  }
			  maintainTitle
			  maintainContent
			  maintainListRepeater {
				maintainList
			  }
			  maintainButtonText
			  maintainButtonLink
			}
			acfGeneralLayout {
				genBoxHeading
          		genBoxDescription
			  genContentModules {
				... on WpPage_Acfgenerallayout_GenContentModules_PageBanner {
				  pbBgImage {
					sourceUrl
				  }
				  pgTitle
				  pgDescription
				}
				... on WpPage_Acfgenerallayout_GenContentModules_ImageWithContent {
				  iwcMainTitle
				  iwcRepeater {
					iwcImage {
					  sourceUrl
					}
					iwcTitle
					iwcDescription
					iwcButtonText
					iwcButtonLink
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