import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";

class Career extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      //const metadata = data.wordpressPage.yoast_meta[0].content;
      return (
        <Layout>
        <SEO title="Career"/>
        <Header headernavclass="lightheader" />
            <div id="page" className="site career">
                <div id="content" className="site-content">
                {/* page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
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
                                    {data.allWordpressWpCareer.edges.map(({ node }) => (
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12 "
                                        key={node.id}>
                                            <div className="card">
                                                <h3>{node.title}</h3>
                                                <div className="row padding-bottom">
                                                    <div className="col-xl-7 col-lg-7 col-sm-12">
                                                        <h4 dangerouslySetInnerHTML={{ __html: node.acf.cr_job_profile }} />
                                                        <span>No. of opening: {node.acf.career_no_of_openings}</span>
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
        wordpressPage(slug: {eq: "career"}) {
            title
            acf {
              header_page_title
              header_sub_text
              header_section_title
              header_mascot {
                source_url
              }
                use_common_contact_section
                tuabp_title
                tuabp_image {
                source_url
                }
                tuabp_content
                tuabp_button_text
                tuabp_button_link
            }
        }
        allWordpressWpCareer {
            edges {
                node {
                    title
                    id
                    acf {
                        career_no_of_openings
                        cr_experience
                        cr_job_profile
                      }
                }
            }
        }
    }
`