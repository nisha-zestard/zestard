import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import PlatformWeWork from "../../components/PlatformWeWork";
import OurRecentWork from "../../components/OurRecentWork";

class EcommerceDevelopment extends Component {
	render() {
		const data = this.props.data;
		const seodata = data.allWpPage.edges[0].node.seo;
		const acfgenlayout = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules;		

		return (
			<Layout>
				<SEO title={seodata.title} description={seodata.metaDesc} />
				<Header headernavclass="lightheader" />
				<div id="page" className="web-application-development">
					<ServiceDetailHeader title={'Web Application Development'} />
					<ServiceBasicDetail
						headerMascot={acfgenlayout[0].genTwoSecImage.sourceUrl}
						serviceDeail={acfgenlayout[0].genRightDescription}
					/>
					
					<PlatformWeWork platform={acfgenlayout[1]} />

					<OurRecentWork
						title={acfgenlayout[2].orwTitle}
						content={acfgenlayout[2].orwSubTitle}
						portfolio={acfgenlayout[2].orwPortfolioList}
					/>
					
					<AboutProject comcontact={acfgenlayout[3]} />
				</div>
			</Layout>
		)
	}

}

export default EcommerceDevelopment;

export const query = graphql`
{
	allWpPage(filter: {databaseId: {eq: 7279}}) {
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