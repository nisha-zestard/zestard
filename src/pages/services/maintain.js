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
		const page = data.allWpPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const credent = genmodule[3].cred_logos_repeater;
		const portfolio = data.allWpCptuiPortfolio.edges;
		const sertech = data.allWpPage.edges[0].node;
		
		return(
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="darkheader" />
				<div className="maintain-main">
				<ServiceHero
					title={page.header_section_title}
					subText={page.header_sub_text}
					image={page.header_mascot.source_url}
					background={"linear-gradient(47deg,#2a0845 1%,#6441a5)"}
				/>
				<section>
					<div className="make-intro-section text-left">
						<div className="container">
							<ServiceIntro
								sectionTitle={genmodule[0].pis_section_title}
								content={genmodule[0].pis_content}
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="maintain-services">
						<div className="container">
							{genmodule[1].iwc_layout_details.map((node,index) => (
								<div className={index % 2 === 0? 'maintain-service-wrap odd' : 'maintain-service-wrap even'} key={index}>
									<div className="row">
										{index % 2 === 1 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
													}													
												</div>
											</div>
										}
										<div className="col-md-6 maintain-service-content">
											<div className="ser-contain">
												<h2 className="service-title" dangerouslySetInnerHTML={{__html: node.iwc_title}} />
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
													}													
												</div>
												{node.iwc_sub_desc !== null &&
													<div className="service-text" dangerouslySetInnerHTML={{__html: node.iwc_sub_desc}} />
												}
												<Link to={`/${removePre(node.iwc_button_link)}`} className="service-link">{node.iwc_button_text}</Link>
											</div>
										</div>
										{index % 2 === 0 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
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
											{page.maintain_image.source_url !== null &&
												<img src={page.maintain_image.source_url} alt="Hire developers"/>
											}											
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hire-dev-content">
											<h2 className="hire-dev-title">{page.maintain_title}</h2>
											<div className="hire-dev-image">
												{page.maintain_image.source_url !== null &&
													<img src={page.maintain_image.source_url} alt="Hire developers"/>
												}											
											</div>
											<div className="hire-dev-text">
												{page.maintain_content !== null &&
													<p dangerouslySetInnerHTML={{__html: page.maintain_content}} />
												}												
												<ul>
													{page.maintain_list_repeater.map((node,index) => (
														<li key={index}>{node.maintain_list}</li>
													))}
												</ul>
												<Link to={`/${removePre(page.maintain_button_link)}`}>{page.maintain_button_text}</Link>
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
					title={genmodule[2].css_title}
					content={genmodule[2].css_content}
					portfolio={portfolio}
				/>
				<AboutProject apsiwtch={page.use_common_contact_section} />
				</div>
			</Layout>
		)
	}
}

export default Maintain;

export const query = graphql`{
	
	allWpPage(filter: {databaseId: {eq: 6956}}) {
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