import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import PageHeader from './../components/page-header';
import SEO from "../components/seo";

class TermsOfUse extends Component {
  
    render() {
      const data = this.props.data
      const seotd = data.wordpressPage
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
        <SEO title={seotd.yoast_title} description={seotd.yoast_meta[0].content}/>
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
                                <article id="post-{node.wordpress_id}" className="post-{node.wordpress_id} page type-page status-publish hentry">
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
        wordpressPage(slug: {eq: "terms-of-use"}) {
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
        allWordpressPage(filter: {slug: {eq: "terms-of-use"}}) {
            edges {
                node {
                    id
                    title
                    content
                    wordpress_id
                }
            }
          }
    }
`