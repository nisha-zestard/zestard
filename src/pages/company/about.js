// About us Page

import React, { Component } from "react"
import Header from "../../components/header";
import Layout from "../../components/layout"
import SEO from "../../components/seo";
import Valueicon from "../../assets/images/values-icon.png"
import Testimonials from "../../components/TestiMonials";
import AboutProject from "../../components/aboutproject";

class About extends Component {
  
    render() {
        const data = this.props.data
        const page = data.allWordpressPage.edges[0].node
        const testimonial = data.allWordpressWpTestimonials.edges;
        const tellus = data.allWordpressPage.edges[0].node.acf;
        console.log(page);
      return (
        <Layout>
            <SEO title="About"/>
            <Header headernavclass="lightheader" />
            <div id="page" className="site-page about-us">
                <section className="page-title">
                    <div className="container">
                        <div className="pagetitle-wrap text-center">
                            <h1>About Zestard</h1>
                            <div className="breadcums">
                                <ul className="d-flex justify-content-center m-0 p-0">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="who-we-are">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 about-content">
                                   <div className="description" dangerouslySetInnerHTML = {{ __html: page.childWordPressAcfGenImageWithContent.iwc_layout_details[0].iwc_sub_desc }} />                                   
                                </div>
                                <div className="col-md-6 about-image">
                                    <div className="about-image">
                                        <img src={page.childWordPressAcfGenImageWithContent.iwc_layout_details[0].iwc_image.source_url} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="our-values">
                        <div className="container">
                            <h2 className="title text-center">{page.childWordPressAcfGenCardsSection.cs_section_title}</h2>
                            <div className="our-values-inner" >
                                <div className="row">
                                    {page.childWordPressAcfGenCardsSection.cs_cards_details.map((node,index)=>(
                                        <div className="col-md-6 our-values-box-wrapper" key={index}>
                                        <div className="our-values-box">
                                            <div className="icon">
                                                <img src={Valueicon} />
                                            </div>
                                            <div className="descriptions">
                                                <h3>{node.cs_title}</h3>
                                                <div dangerouslySetInnerHTML = {{ __html: node.cs_content}} />
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
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
                </section>
                <section>
                    <div className="our-credentials">
                        <div className="container">
                            <h2 className="title text-center">Our Credentials</h2>
                            <div className="our-credentials-wraper">
                                <div className="row">
                                    {page.childWordPressAcfGenCredentialLogos.cred_logos_repeater.map((node,index)=>(
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                            <div className="our-credentials-box text-center">
                                                <div className="image">
                                                    {node.cred_logos_list.source_url !== null &&
                                                        <img src={node.cred_logos_list.source_url} />
                                                    }                                                    
                                                </div>
                                                <h3 className="c-title">{node.cred_logos_title}</h3>
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

                    <AboutProject
            apsiwtch={tellus.use_common_contact_section}
            apimage={tellus.tuabp_image}
            aptitle={tellus.tuabp_title}
            apcontent={tellus.tuabp_content}
            apbuttontext={tellus.tuabp_button_text}
            apbuttonlink={tellus.tuabp_button_link} />
            </div>
        </Layout>
        )
  }

}
export default About

export const query = graphql`
{
    allWordpressWpTestimonials {
        edges {
          node {
            featured_media {
              source_url
            }
            title
            content
          }
        }
    }
    allWordpressPage(filter: {wordpress_id: {eq: 7775}}) {
        edges {
          node {
            acf {
                use_common_contact_section
                tuabp_title
                tuabp_image {
                  source_url
                }
                tuabp_content
                tuabp_button_text
                tuabp_button_link
            }
            childWordPressAcfGenImageWithContent {
              iwc_layout_details {
                iwc_image {
                  source_url
                }
                iwc_sub_desc
              }
            }
            childWordPressAcfGenCardsSection {
              cs_section_title
              cs_cards_details {
                cs_title
                cs_content
              }
            }
            childWordPressAcfPlatformLogos {
              pl_title
              pl_logos_list {
                pl_logos {
                  source_url
                }
              }
            }
            childWordPressAcfCounter {
              counter_list {
                cuntr_number
                cuntr_text
              }
            }
            childWordPressAcfGenCredentialLogos {
              cred_logos_repeater {
                cred_logos_list {
                  source_url
                }
                cred_logos_title
              }
            }
          }
        }
    }
}
`