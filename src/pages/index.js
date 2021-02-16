import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import SEO from "../components/seo";
import Testimonials from '../components/TestiMonials';
import Credentails from '../components/Credentails';
import OurClients from "../components/OurClients";
import ServiceHero from "../components/ServiceHero";
// import Slider from "react-slick";
import Counterbg from "../images/counter-bg.png"
import { removePre } from './../util/common'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

    render() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zestard Technologies",
            "url": "https://www.zestard.com/",
            "logo": "https://phptasks.com/zestard-mmm/wp-content/uploads/2019/03/zestard-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@zestard.com",
              "telephone": "+1 4089404509",
              "contactType": "customer service",
              "areaServed": ["US","UK","IN"],
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/zestard",
              "https://www.linkedin.com/company/zestard",
              "https://twitter.com/zestardtech",
              "https://www.youtube.com/c/zestardtechnologies",
              "https://www.instagram.com/zestard/"

            ]
          }
        const data = this.props.data  
        const header = data.allWpPage.edges[0].node.acf;
        const clientlogo = data.allWordpressWpClients.edges;
        const seotd = data.allWpPage.edges[0].node;
        const expertise = header.home_content_modules_page[0];
        const counter = data.wordpressAcfOptions.options;
        const testimonial = data.allWpCptuiTechnology.edges;
        const credential = header.gen_content_modules_page[3].cred_logos_repeater;
        const recentpost = data.allWpPost.edges;
        const portfolio = data.allWpCptuiPortfolio.edges;
        const newbann = header.gen_content_modules_page[4];
        console.log(expertise)
          
  return(
  <Layout> 
    <div className="home-new">
    <SEO title={seotd.yoast_title} description={seotd.yoast_meta[0].content} schemaMarkup={schema}/>
    {/* banner-section  */}

    <Header headernavclass="darkheader" />
    <ServiceHero
      title={newbann.gen_left_description}
      subText=""
      image={newbann.gen_two_sec_image.source_url}
      background={"linear-gradient(-47deg, #0784a5, #03168e)"}
    />

    {/* Clients-section */}
    <OurClients clients={clientlogo} />

    {/* Portfolio-section */}
    <section>
        <div className="recent-work portfolio">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Portfolio</h2>
                </div>
                <div className="portfolio-list">
                    <div className="row">
                        {portfolio.map((node,index) => (
                            <div className={node.node.title === "Jadeblue" ? 'col-md-12 full-col' : 'col-md-6 half-col'} key={index}>
                                <div className="portfolio-wrap">
                                    <div className="portfolio-image">
                                        {node.node.acf.pf_image_with_responsive.source_url !== null &&
                                            <img src={node.node.acf.pf_image_with_responsive.source_url} alt={node.node.title} />
                                        }                                    
                                    </div>
                                </div>
                            </div>
                        ))}                   
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* expertise-section */}
    <section>
        <div className="expertise-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="title">
                            <h2>{expertise.home_oe_section_title}</h2>
                            <p>{expertise.home_oe_content}</p>
                            <Link to={`/services/${removePre(expertise.home_oe_read_more_link)}`} className="btn r-more">read more</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="experience-wrap">
                            <ul>
                                {expertise.home_oe_right_icons.map((node,index) => (
                                    <li key={index}>
                                        {node.home_oe_icons.source_url !== null &&
                                        <Link to={`/${removePre(node.home_oe_rp_links)}`}><img src={node.home_oe_icons.source_url} alt="f-logo-img" /></Link>
                                        }                                        
                                    </li>
                                ))}                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*Counter section*/}
    <section>
        <div className="counter-section" style={{backgroundImage:`url(${Counterbg})`}}>
            <div className="container">
                <div className="counter-wraper">
                    <ul className="row">
                        {counter.cs_counter_details.map((node,index) => (
                            <li className="box" key={index}>
                                <h2>{node.cs_number}<span>+</span></h2>
                                <p>{node.cs_label}</p>
                            </li>
                        ))}                        
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Testimonials section */}
    <Testimonials testimonial={testimonial} />

    {/* News & Blog section */}
    <section>
      <div className="news-Blog-section">
        <div className="container">
          <div className="title text-center">
              <h2>Read Our Latest News & Blog</h2>
          </div>
          <div className="row">
              {recentpost.map((node,index)=>(
                <div className="col-md-4" key={index}>
                  <div className="box">
                    <div className="blog-image">
                        {(node.node.featured_media !== null && node.node.featured_media.source_url !== null) &&
                            <img src={node.node.featured_media.source_url} alt="top-img" />
                        }   
                    </div>                       
                    <ul>
                        <li><span><i className="fa fa-user" aria-hidden="true"></i></span>{node.node.author.name}</li>
                        <li><span><i className="fa fa-calendar" aria-hidden="true"></i></span>{node.node.date}</li>
                    </ul>
                    
                    <div className="blog-title">
                        <h2><Link to={`/blog/${removePre(node.node.link)}`} className="read-more">{node.node.title}</Link></h2>
                    </div>                                
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
   </div> 
  </Layout>
)}}
export default Home

export const query = graphql`
{
      allWpPage(filter: {databaseId: {eq: 2}}) {
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
            acfGeneralLayout {
              genContentModules {
                ... on WpPage_Acfgenerallayout_GenContentModules_GenRightImageAndLeftDescription {
                  genTwoSecImage {
                    sourceUrl
                  }
                  genLeftDescription
                }
                ... on WpPage_Acfgenerallayout_GenContentModules_OurRecentWork {
                  orwTitle
                  orwPortfolioList {
                    ... on WpCptui_portfolio {
                      id
                      acfPortfolioLayout {
                        pfImageWithResponsive {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
            }
            acfHomeLayout {
              homeContentModules {
                ... on WpPage_Acfhomelayout_HomeContentModules_HomeOurExpertise {
                  homeOeSectionTitle
                  homeOeContent
                  homeOeReadMoreLink
                  homeOeRightIcons {
                    homeOeIcons {
                      sourceUrl
                    }
                    homeOeRpLinks
                  }
                }
              }
            }
          }
        }
      }
      allWpCptuiTechnology {
        nodes {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      allWpCptuiClient {
        edges {
          node {
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      allWp {
        edges {
          node {
            counterSettings {
              acfCounterSettings {
                csSectionClass
                csCounterDetails {
                  csLabel
                  csNumber
                }
              }
            }
          }
        }
      }
      allWpPost(filter: {}, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            slug
            content
            link
            excerpt
            date(formatString: "MM DD, YYYY")
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
}
`