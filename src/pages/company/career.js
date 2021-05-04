import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";


class Career extends Component {
  
    render() {
      const data = this.props.data;
      const seodata = data.wpPage.seo;
      const bannerdata = data.wpPage.acfHeader;
      const careerlist = data.allWpCptuiCareer.edges;

      return (
        <Layout>
        <SEO title={seodata.title} description={seodata.metaDesc}/>
        <Header headernavclass="lightheader" />
            <div id="page" className="site career">
                <div id="content" className="site-content">
                {/* page header */}
                    <PageHeader
                        headerMascot = {bannerdata.headerMascot.sourceUrl}
                        headerSubText = {bannerdata.headerSubText}
                        headerSectionTitle=""
                        headerPageTitle={bannerdata.headerPageTitle}
                    />
                    {/* career Part */}
                    <section id="career-container">
                        <div className="open-position">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                        <h2 className="title">Open Position</h2>
                                        <h6>
                                        We help companies from all over the world reach their business goals.
                                        </h6>                                        
                                    </div>
                                </div>
                                <div className="job-open">
                                    <div className="row">
                                    {careerlist.map(({ node }) => (
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12 "
                                        key={node.id}>
                                            <div className="card">
                                                <h3>{node.title}</h3>
                                                <div className="row padding-bottom">
                                                    <div className="col-xl-7 col-lg-7 col-sm-12">
                                                        <h4 dangerouslySetInnerHTML={{ __html: node.acfCareerLayout.crJobProfile }} />
                                                        <span>No. of opening: {node.acfCareerLayout.crNoOfVacancies}</span>
                                                        <br/>
                                                        <span>Full time - Ahmedabad</span>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-5 col-sm-12">
                                                        <a href="mailto:hr@zestard.com" className="btn btn-primary">
                                                            Apply Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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

export default Career

export const query = graphql`
    {
        wpPage(slug: {eq: "career"}) {
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
        }
        allWpCptuiCareer {
            edges {
              node {
                id
                title
                acfCareerLayout {
                  crNoOfVacancies
                  crExperience
                  crJobProfile
                }
              }
            }
          }
    }
`