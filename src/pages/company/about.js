import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import PageHeader from './../../components/page-header';
import Valueicon from "../../assets/images/values-icon.png"
import Testimonials from "../../components/TestiMonials";
import AboutProject from "../../components/aboutproject";

class About extends Component {
  
    render() {
        const data = this.props.data
        const seodata = data.allWpPage.edges[0].node.seo;
        const pagedata = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules;
        const testimonial = data.allWpCptuiTestimonial.edges;
        
      return (
        <Layout>
            <SEO title={seodata.title} description="" />
            <Header headernavclass="lightheader" />
            <div id="page" className="site-page about-us">
                <PageHeader
                    headerMascot = {pagedata[0].pbBgImage.sourceUrl}
                    headerSubText = {pagedata[0].pgDescription}
                    headerSectionTitle=""
                    headerPageTitle={pagedata[0].pgTitle}
                />
                
                <section>
                    <div className="who-we-are">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 about-content">
                                   <div className="description" dangerouslySetInnerHTML = {{ __html: pagedata[1].genLeftDescription }} />                                   
                                </div>
                                <div className="col-lg-6 about-image">
                                    <div className="about-image">
                                        <img src={pagedata[1].genTwoSecImage.sourceUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="our-values">
                        <div className="container">
                            <h2 className="title text-center">{pagedata[2].genGridBoxTitle}</h2>
                            <div className="our-values-inner" >
                                <div className="row">
                                    {pagedata[2].genGridBoxesRep.map((node,index)=>(
                                        <div className="col-md-6 our-values-box-wrapper" key={index}>
                                        <div className="our-values-box">
                                            <div className="icon">
                                                <img src={Valueicon} />
                                            </div>
                                            <div className="descriptions">
                                                <h3>{node.genTitleGb}</h3>
                                                <div dangerouslySetInnerHTML = {{ __html: node.genDescriptionGb}} />
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div className="platforms-we-support">
                        <div className="container">
                            <h2 className="title text-center">{page.childWordPressAcfPlatformLogos.pl_title}</h2>
                            <div className="platforms-inner">
                                <ul className="d-flex m-0 p-0 platforms-list">
                                {page.childWordPressAcfPlatformLogos.pl_logos_list.map((node,index)=>(
                                    <li>
                                        {node.pl_logos.source_url !== null &&
                                            <a href="#"><img src={node.pl_logos.source_url} /></a>
                                        }                                        
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="success-counter">
                        <div className="container">
                            <ul className="d-flex p-0 counter-list">
                                {page.childWordPressAcfCounter.counter_list.map((node,index)=>(
                                    <li>
                                        <div className="counter-box">
                                            <h3>{node.cuntr_number}</h3>
                                            <p>{node.cuntr_text}</p>
                                        </div>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                </section> */}
                <section>
                    <div className="our-credentials">
                        <div className="container">
                            <h2 className="title text-center">Our Credentials</h2>
                            <div className="our-credentials-wraper">
                                <div className="row">
                                    {pagedata[3].logoRepeater.map((node,index)=>(
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                                            <div className="our-credentials-box text-center">
                                                <div className="image">
                                                    {node.clrImgLogo.sourceUrl !== null &&
                                                        <img src={node.clrImgLogo.sourceUrl} />
                                                    }                                                    
                                                </div>
                                                <h3 className="c-title">{node.clrImgTitle}</h3>
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

          <AboutProject comcontact={pagedata[4]} />
            </div>
        </Layout>
        )
  }

}
export default About

export const query = graphql`
{
  allWpCptuiTestimonial {
    edges {
      node {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
}
      allWpPage(filter: {databaseId: {eq: 7775}}) {
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
              genContentModules {
                ... on WpPage_Acfgenerallayout_GenContentModules_PageBanner {
                  pgTitle
                  pgDescription
                  pbBgImage {
                    sourceUrl
                  }
                }
                ... on WpPage_Acfgenerallayout_GenContentModules_GenRightImageAndLeftDescription {
                  genLeftDescription
                  genTwoSecImage {
                    sourceUrl
                  }
                }
                ... on WpPage_Acfgenerallayout_GenContentModules_GenGridBoxes {
                  genGridBoxTitle
                  genGridBoxesRep {
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
                    clrImgTitle
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
}
`
