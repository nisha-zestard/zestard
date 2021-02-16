import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "./../../components/seo";
import Layout from "./../../components/layout";
import Header from "./../../components/header";
import AboutProject from "./../../components/aboutproject"
import Credentials from "../../components/Credentails";
import OurRecentWork from "../../components/OurRecentWork";
import ServiceHero from '../../components/ServiceHero';

class Market extends Component {	
	render() {
		const data = this.props.data;
		const page = data.allWpPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const credential = genmodule[4].cred_logos_repeater;
		const portfolio = data.allWpCptuiPortfolio.edges;
		const sertech = data.allWpPage.edges[0].node;
		
		return(
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="darkheader" />
				<div className="market-main">
				<ServiceHero
					title={page.header_section_title}
					subText={page.header_sub_text}
					image={page.header_mascot.source_url}
					background={"linear-gradient(128deg,#002757 50%,#37d5d6)"}
				/>
				<section>
					<div className="what-we-offer">
						<div className="container">
							<div className="top-content">
								<div className="title text-center">
									<h2>{genmodule[0].pis_section_title}</h2>
								</div>
								<div className="text text-center">
									{genmodule[0].pis_content !== null &&
										<div dangerouslySetInnerHTML={{__html: genmodule[0].pis_content}} />
									}									
								</div>
							</div>
							<div className="market-services-list">
								<div className="row">
									{genmodule[1].cs_cards_details.map((node,index) => (
										<div className="col-md-6 col-lg-4 m-ser-wrap" key={index}>
											<div className="m-ser-wrap-inner">
												{node.cs_icon !== null &&
													<div className="m-ser-icon">
														{node.cs_icon !== null &&
															<img src={node.cs_icon.source_url} className="ser-icon" alt=""/>
														}
														{node.cs_hover_icon !== null &&
															<img src={node.cs_hover_icon.source_url} className="ser-icon-hover" alt=""/>
														}
														
													</div>
												}												
												<h2 className={index === 0 ? 'service-main-title' : 'm-ser-title'}>{node.cs_title}</h2>
												{node.cs_content !== null &&
													<div className="m-ser-text" dangerouslySetInnerHTML={{__html: node.cs_content}} />
												}												
											</div>
										</div>
									))}									
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="links-earned">
						<div className="container">
							<div className="title text-center">
								<h2>{genmodule[2].ls_section_title}</h2>
							</div>
							<ul className="links-earned-list">
								{genmodule[2].ls_link_images.map((node,index) => (
									<li key={index}>
										<div className="links-earned-wrap">
											{node.ls_image.source_url !== null &&
												<img src={node.ls_image.source_url} alt="Links earned"/>
											}											
										</div>
									</li>
								))}								
							</ul>
						</div>
					</div>
				</section>
				{/* Credentials section */}
				<Credentials credentials={credential} slidesToShow={5} />
				{/* <section>
				<div className="our-credientials">
					<div className="container">
					<div className="title text-center">
						<h2>Our Certifications</h2>
					</div>
					<div className="credientials-wrap text-center">
						<div className="c-main">
						<img src={Credentialsimage} className="main-image" alt="Credential main"/>
						<img src={Zectopus} className="center-image" alt="Zectopus"/>
						{creden.map((node,index) => (
							<div className={"credi-logo-" + index + " creadi_wrap " + node.node.slug} key={index}>
								{node.node.featured_media.source_url !== null &&
									<img src={node.node.featured_media.source_url} alt={node.node.title}/>
								}								
							</div>
						))}						
						</div>
					</div>
					</div>
				</div>
				</section> */}
				<OurRecentWork
					title={genmodule[3].css_title}
					content={genmodule[3].css_content}
					portfolio={portfolio}
				/>
				<AboutProject apsiwtch={page.use_common_contact_section} />
				</div>
			</Layout>
		)
	}
}

export default Market;

export const query = graphql`{
	allWpCptuiPortfolio(filter: {tags: {nodes: {elemMatch: {databaseId: {eq: 232}}}}}, limit: 2) {
        edges {
          node {
            title
            excerpt
            link
            featuredImage {
				node {
				  sourceUrl
				}
			}
			acfPortfolioLayout {
				pfImageWithResponsive {
				  sourceUrl
				}
			  }            
          }
        }
    }
	
	allWpPage(filter: {databaseId: {eq: 6968}}) {
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