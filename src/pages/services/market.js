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
		
		const pagedata = data.allWpPage.edges[0].node;
		const bannerdata = pagedata.acfHeader
		const genmodule = pagedata.acfGeneralLayout;
		const credential =genmodule.genContentModules[3].listCredential;
		const sertech = data.allWpPage.edges[0].node.seo;
		
		return(
			<Layout>
				<SEO title={sertech.title} description={sertech.metaDesc} />
				<Header headernavclass="darkheader" />
				<div className="market-main">
				<ServiceHero
					title={bannerdata.headerSectionTitle}
					subText={bannerdata.headerSubText}
					image={bannerdata.headerMascot.sourceUrl}
					background={"linear-gradient(128deg,#002757 50%,#37d5d6)"}
				/>
				<section>
					<div className="what-we-offer">
						<div className="container">
							<div className="top-content">
								<div className="title text-center">
									<h2>{genmodule.genBoxHeading}</h2>
								</div>
								<div className="text text-center">
									{genmodule.genBoxDescription !== null &&
										<div dangerouslySetInnerHTML={{__html: genmodule.genBoxDescription}} />
									}									
								</div>
							</div>
							<div className="market-services-list">
								<div className="row">
									<div className="col-md-6 col-lg-4 m-ser-wrap">
										<div className="m-ser-wrap-inner">
											<h2 className="service-main-title">{genmodule.genContentModules[1].genGridBoxTitle}</h2>
											<div className="m-ser-text"></div>
										</div>
									</div>
									{genmodule.genContentModules[1].genGridBoxesRep.map((node,index) => (
										<div className="col-md-6 col-lg-4 m-ser-wrap" key={index}>
											<div className="m-ser-wrap-inner">
												{node.genIconGb !== null &&
													<div className="m-ser-icon">
														{node.genIconGb !== null &&
															<img src={node.genIconGb.sourceUrl} className="ser-icon-hover" alt=""/>
														}
														{node.genHoverIconGb !== null &&
															<img src={node.genHoverIconGb.sourceUrl} className="ser-icon" alt=""/>
														}														
													</div>
												}												
												<h2 className="m-ser-title">{node.genTitleGb}</h2>
												{node.genDescriptionGb !== null &&
													<div className="m-ser-text" dangerouslySetInnerHTML={{__html: node.genDescriptionGb}} />
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
								<h2>{genmodule.genContentModules[2].clTitle}</h2>
							</div>
							<ul className="links-earned-list">
								{genmodule.genContentModules[2].logoRepeater.map((node,index) => (
									<li key={index}>
										<div className="links-earned-wrap">
											{node.clrImgLogo.sourceUrl !== null &&
												<img src={node.clrImgLogo.sourceUrl} alt="Links earned"/>
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
				
				<OurRecentWork
					title={genmodule.genContentModules[4].orwTitle}
					content={genmodule.genContentModules[4].orwSubTitle}
					portfolio={genmodule.genContentModules[4].orwPortfolioList}
				/>
				<AboutProject comcontact={genmodule.genContentModules[5]} />
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
					... on WpCptuiPortfolio {
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