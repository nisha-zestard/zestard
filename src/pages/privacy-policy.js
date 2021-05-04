import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import PageHeader from './../components/page-header';
import SEO from "../components/seo";

class PrivacyPolicy extends Component {
  
    render() {
      const data = this.props.data;      
      const seodata = data.allWpPage.edges[0].node.seo;
      const bannerdata = data.allWpPage.edges[0].node.acfHeader;
    

      return (
        <Layout>
        <SEO title={seodata.title} description={seodata.metaDesc} />
        <Header headernavclass="lightheader" />
            <div id="page" className="site">
                <div id="content" className="site-content">
                {/* page header */}
                <PageHeader
                    headerMascot = {bannerdata.headerMascot.sourceUrl}
                    headerSubText = ""
                    headerSectionTitle= ""
                    headerPageTitle={bannerdata.headerPageTitle}
                />
                {/* {data.allWpPage.edges.map(({ node }, index) => ( */}
                    <div className="container" >
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <article id={"post-"+data.allWpPage.edges[0].node.id}>   
                                    <div className="entry-content"
                                    dangerouslySetInnerHTML={{ __html: data.allWpPage.edges[0].node.content }} />
                                </article>
                            </main>
                        </div>
                    </div>
                {/* ))} */}
                </div>
            </div>
        </Layout>
      )
    }
}

export default PrivacyPolicy

export const query = graphql`
    {        
        allWpPage(filter: {databaseId: {eq: 1664}}) {
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
                    id
                    title
                    content
                    databaseId
                }
            }
          }
    }
`