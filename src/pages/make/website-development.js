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
		const seodata = data.allWpPage.edges[0].node.seo;
		const acfgenlayout = data.allWpPage.edges[0].node.acfGeneralLayout;
		const conmodule = acfgenlayout.genContentModules;

		return (
			<Layout>
				<SEO title={seodata.title} description={seodata.metaDesc} />
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<ServiceDetailHeader title={'Website Development'} />
					<ServiceBasicDetail
						headerMascot={conmodule[0].genTwoSecImage.sourceUrl}
						serviceDeail={conmodule[0].genRightDescription}
					/>
					<PlatformWeWork platform={conmodule[1]} />
					<OurRecentWork
						title={conmodule[2].orwTitle}
						content={conmodule[2].orwSubTitle}
						portfolio={conmodule[2].orwPortfolioList}
					/>
				</div>
				<AboutProject comcontact={conmodule[3]} />
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
					  ... on WpPage_Acfgenerallayout_GenContentModules_ImageWithContent {
						iwcMainTitle
						iwcRepeater {
						  iwcTitle
						  iwcImage {
							sourceUrl
						  }
						  iwcIcon {
							sourceUrl
						  }
						  iwcDescription
						  iwcButtonText
						  iwcButtonLink
						  iwcSectionClass
						}
					  }
					}
				  }			  
			}
		  }
	  }
}`