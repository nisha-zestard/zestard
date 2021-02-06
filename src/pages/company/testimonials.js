import React, { Component } from "react"
import { graphql } from "gatsby"
import Masonry from 'react-masonry-css';
import Layout from "../../components/layout"
import Header from "../../components/header";
import PageHeader from './../../components/page-header';
import SEO from "../../components/seo";
import Testimonialcomma from "../../images/quote-icon.png"

const breakpointColumnsObj = {
    default: 2,
    1025: 2,
    768: 2,
    500: 1
  };
class Testimonials extends Component {
  
    render() {
      const data = this.props.data
      const seotd = data.wpPage
      const acfData = data.wpPage.acf;
      //const metadata = data.wpPage.yoast_meta[0].content;
      return (
        <Layout>
        <SEO title={seotd.yoast_title} description={seotd.yoast_meta[0].content}/>
        <Header headernavclass="lightheader" />
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
                                    <img className="img-responsive" alt="coma" loading="lazy" src={Testimonialcomma} />
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
        </Layout>
      )
    }
}

export default Testimonials

export const query = graphql`
    {
        wpPage(slug: {eq: "testimonials"}) {
            yoast_title
            yoast_meta {
                content
            }
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