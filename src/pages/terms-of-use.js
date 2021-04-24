import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import PageHeader from './../components/page-header';
import SEO from "../components/seo";

class TermsOfUse extends Component {
  
    render() {
      const data = this.props.data
      const seotd = data.wpPage.seo
      const acfData = data.wpPage.acfHeader;
      return (
        <Layout>
        <SEO title={seotd.title} description={seotd.metaDesc}/>
        <Header headernavclass="lightheader" />
            <div id="page" className="site">
                <div id="content" className="site-content">
                {/* page header */}
                <PageHeader
                    headerMascot = {acfData.headerMascot}
                    headerSubText = {acfData.headerSubText}
                    headerSectionTitle={acfData.headerSectionTitle}
                    headerPageTitle={acfData.headerPageTitle}
                />
                {data.allWpPage.edges.map(({ node }, index) => (
                    <div className="container" key={index}>
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <article id="post-{node.databaseId}" className="post-{node.databaseId} page type-page status-publish hentry">
                                    <div className="entry-content"
                                    dangerouslySetInnerHTML={{ __html: node.content }} />
                                </article>
                            </main>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </Layout>
      )
    }
}

export default TermsOfUse

export const query = graphql`
    {
        wpPage(databaseId: {eq: 1667}) {
            title
            seo {
                title
                metaDesc
            }            
            acfHeader {
                headerMascot {
                    sourceUrl
                }
                headerSubText
                headerSectionTitle
                headerPageTitle
            }
        }
        allWpPage(filter: {databaseId: {eq: 1667}}) {
            edges {
                node {
                    id
                    title
                    content
                    databaseId
                }
            }
        }
    }
`