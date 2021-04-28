import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";

class Partnership extends Component {
  
    render() {
      const data = this.props.data;     
      const seodata = data.wpPage.seo;
      const bannerdata = data.wpPage.acfHeader;
      const pagedata = data.wpPage.acfGeneralLayout.genContentModules;
      
      return (
        <Layout>
          <SEO title={seodata.title} description={seodata.metaDesc}/>
          <Header headernavclass="lightheader" />
          <div id="page" className="site ">
            <div id="content" className="site-content">
              {/* page header */}
              <PageHeader
                headerMascot = {bannerdata.headerMascot.sourceUrl}
                headerSubText = {bannerdata.headerSubText}
                headerSectionTitle=""
                headerPageTitle={bannerdata.headerPageTitle}
              />
              {/* partnership */}
              <section>
                <div className="partner-type  offshare">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{pagedata[0].genSectionClassRild}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: pagedata[0].genLeftDescription }}
                        />
                      </div>
                      <div className="col-md-5 col-lg-5">
                        {pagedata[0].genTwoSecImage !== null &&
                         <img src={pagedata[0].genTwoSecImage.sourceUrl} alt="" loading="lazy" />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="partner-type reseller">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 col-lg-5">
                        {pagedata[1].genTwoSecImage !== null &&
                            <img src={pagedata[1].genTwoSecImage.sourceUrl} alt="" loading="lazy" />
                        }
                      </div>
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{pagedata[1].genSectionClassRild}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: pagedata[1].genLeftDescription }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="partner-type referral">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{pagedata[2].genSectionClassRild}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: pagedata[2].genLeftDescription }}
                        />
                      </div>
                      <div className="col-md-5 col-lg-5">
                        {pagedata[2].genTwoSecImage !== null &&
                            <img src={pagedata[2].genTwoSecImage.sourceUrl} alt="" loading="lazy" />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
        )
  }

}
export default Partnership

export const query = graphql`
{
  wpPage(databaseId: {eq: 103}) {
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
        ... on WpPage_Acfgenerallayout_GenContentModules_GenRightImageAndLeftDescription {
          genTwoSecImage {
            sourceUrl
          }
          genSectionClassRild
          genLeftDescription
        }
      }
    }
  }
}
`