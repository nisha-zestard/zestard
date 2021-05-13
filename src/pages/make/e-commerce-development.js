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
		const bannerdata = data.allWpPage.edges[0].node.acfHeader
		const acflayout = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules;		
		const services = acflayout[0];
		const portfolio = acflayout[1];
		const getintouch = acflayout[2];
		
		return (
			<Layout>
				<SEO title={seodata.title} description={seodata.metaDesc} />
				<Header headernavclass="lightheader" />
				<div id="page" className="ecommerce-development">
				
					<ServiceDetailHeader title={'E-commerce Development'} />
					<ServiceBasicDetail
						headerMascot={bannerdata.headerMascot.sourceUrl}
						serviceDeail={bannerdata.headerSubText}
					/>
					<PlatformWeWork platform={services} />
					<OurRecentWork
						title={portfolio.orwTitle}
						content={portfolio.orwSubTitle}
						portfolio={portfolio.orwPortfolioList}
					/>

					<AboutProject comcontact={getintouch} />
					
				</div>
			</Layout>
		)
	}

}

export default EcommerceDevelopment;

export const query = graphql`
{
	allWpPage(filter: {databaseId: {eq: 1491}}) {
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