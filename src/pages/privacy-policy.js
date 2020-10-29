import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import PageHeader from './../components/page-header';
import SEO from "../components/seo";

class PrivacyPolicy extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      const sertech = data.wordpressPage
    

      return (
        <Layout>
        <SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
        <Header headernavclass="lightheader" />
            <div id="page" className="site">
                <div id="content" className="site-content">
                {/* page header */}
                <PageHeader
                    headerMascot = {acfData.header_mascot}
                    headerSubText = {acfData.header_sub_text}
                    headerSectionTitle={acfData.header_section_title}
                    headerPageTitle={acfData.header_page_title}
                />
                {data.allWordpressPage.edges.map(({ node }, index) => (
                    <div className="container" key={index}>
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <article id="post-{node.id}">   
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

export default PrivacyPolicy

export const query = graphql`
    {
        wordpressPage(slug: {eq: "privacy-policy"}) {
            title
            yoast_title
                    yoast_meta {
                        content
                    }
            acf {
              header_page_title
                header_mascot {
                    source_url
                }
            }
        }
        allWordpressPage(filter: {slug: {eq: "privacy-policy"}}) {
            edges {
                node {
                    yoast_title
                    yoast_meta {
                        content
                    }
                    id
                    title
                    content
                    wordpress_id
                }
            }
          }
    }
`