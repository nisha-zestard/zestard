// Testimonials Page

import React, { Component } from "react"
import { graphql } from "gatsby"

import Masonry from 'react-masonry-css';
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";

const breakpointColumnsObj = {
    default: 3,
    1025: 3,
    768: 2,
    500: 1
  };
class Testimonials extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      //const metadata = data.wordpressPage.yoast_meta[0].content;
      return (
        <>
        <SEO />
            <div id="page" className="site">
                <div id="content" className="site-content">
                    {/* Page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    <div className="testimonial-list">
                    <div className="container">
                    <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    {data.allWordpressWpTestimonials.edges.map(({ node }) => (
                    <div className="grid-item" key={node.id}>
                        <div className="testimonial-wrapper card">
                            <div className="speaks">
                                <i className="coma">
                                    <img className="img-responsive" alt="coma" loading="lazy"
                                    src="https://postyoulike.com/zestard/wp-content/themes/zestard/images/testimonials/quote-icon.png" />
                                </i>
                                <div dangerouslySetInnerHTML={{ __html: node.content }} />
                            </div>
                            <div className="client-name card-footer">
                                <h3>{node.title}</h3>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Masonry>
                    </div>
                    </div>
                    {/* testimonials */}
                </div>
            </div>
        </>
      )
    }
}

export default Testimonials

export const query = graphql`
    {
        wordpressPage(slug: {eq: "testimonials"}) {
            title
            acf {
              header_page_title
              header_sub_text
              header_section_title
                header_mascot {
                    source_url
                }
            }
        }
        allWordpressWpTestimonials {
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
`



// https:postyoulike.com/zestard/wp-content/themes/zestard/images/testimonials/quote-icon.png