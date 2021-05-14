import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import SEO from "../components/seo";
import Testimonials from '../components/TestiMonials';
//import Credentails from '../components/Credentails';
import OurClients from "../components/OurClients";
// import ServiceHero from "../components/ServiceHero";
// import Slider from "react-slick";
import Counterbg from "../images/counter-bg.png"
import { removePre } from './../util/common'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import AOS from 'aos'; 
import Typed from 'react-typed';

class Home extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      componentDidMount() {
        const isBrowser = typeof document !== "undefined";
        const AOS = isBrowser ? require("aos") : undefined;
    
        this.aos = AOS;
        this.aos.init();
        
    }
      componentWillReceiveProps (){ 
        AOS.refresh(); 
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
         const header = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules[0];
         const clientlogo = data.allWpCptuiClient.edges;
         const seotd = data.allWpPage.edges[0].node.seo;
         const expertise = data.allWpPage.edges[0].node.acfHomeLayout.homeContentModules[0];
         const counter = data.allWp.edges[0].node.counterSettings.acfCounterSettings.csCounterDetails;
         const testimonial = data.allWpCptuiTestimonial.edges;
         const recentpost = data.allWpPost.edges;
        const portfolio = data.allWpPage.edges[0].node.acfGeneralLayout.genContentModules[1].orwPortfolioList;
        var oldString = 'Make, Market, Maintain';
        var mynewarray=oldString.split(',')
        var cmobprotlist = {
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          arrow: false,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                  }
                },
              {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1, 
                }
              }
          ]
      };
        
        
  return(
  <Layout> 
    <div className="home-new">
    
    <SEO title={seotd.title} description={seotd.metaDesc} schemaMarkup={schema}/>
    {/* banner-section  */}
    

    <Header headernavclass="darkheader" />
    {/* <ServiceHero
      title=""
      subText={header.genLeftDescription}
      image={header.genTwoSecImage.sourceUrl}
      background={"linear-gradient(-47deg, #0784a5, #03168e)"}
    /> */}

        <section>
            <div className="page-banner" style={{ background: "linear-gradient(-47deg, #0784a5, #03168e)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 banner-content-wrap d-flex align-items-center">
                            <div className="banner-content">
                                <h1>We<br/>
                                <Typed strings={mynewarray} 
                          typeSpeed={120} 
                          backSpeed={50}  
                          cursorChar= {'_'} 
                          loop /> 
                          <br/>Websites
                                </h1>
                                {header.genLeftDescription !== null &&
                                  <p dangerouslySetInnerHTML={{__html : header.genLeftDescription }} />
                                }
                                
                            </div>
                        </div>
                        <div className="col-md-6 banner-image-wrap">
                            <div className="banner-image">
                                {header.genTwoSecImage.sourceUrl !== null &&
                                    <img src={header.genTwoSecImage.sourceUrl}  alt="Make Banner"/>
                                }										
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* Clients-section */}
    <OurClients clients={clientlogo} />

    {/* Portfolio-section */}
    <section>
        <div className="recent-work portfolio">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Portfolio</h2>
                </div>
                <div className="portfolio-list desk-prot-list d-md-block d-none">
                    <div className="row">
                        {portfolio.map((node,index) => (
                            <div className={node.title === "Jadeblue" ? 'col-md-12 full-col' : 'col-md-6 half-col'} key={index}>
                                <div className="portfolio-wrap">
                                    <div className="portfolio-image">
                                        {node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl !== null &&
                                            <img src={node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl} alt={node.title} />
                                        }                                    
                                    </div>
                                </div>
                            </div>
                        ))}                   
                    </div>
                </div>
                <div className="portfolio-list mob-pro-list d-md-none d-sm-block">                 
                    <Slider {...cmobprotlist}>
                        {portfolio.map((node,index) => (
                            <div key={index}>
                                {node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl !== null && 
                                <img src={node.acfPortfolioLayout.pfImageWithResponsive.sourceUrl} alt="prot-list-img" />
                            }
                            </div>
                        ))}
                    </Slider>                    
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
                            <h2>{expertise.homeOeSectionTitle}</h2>
                            <p>{expertise.homeOeContent}</p>
                            <Link to={`/services${removePre(expertise.homeOeReadMoreLink)}`} className="btn r-more">read more</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="experience-wrap">
                            <ul>
                                {expertise.homeOeRightIcons.map((node,index) => (
                                    <li key={index}>
                                        {node.homeOeIcons.sourceUrl !== null &&
                                        <Link to={node.homeOeRpLinks}><img src={node.homeOeIcons.sourceUrl} alt="f-logo-img" /></Link>
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
                        {counter.map((node,index) => (
                            <li className="box" key={index}>
                                <h2>{node.csNumber}<span>+</span></h2>
                                <p>{node.csLabel}</p>
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
                        {node.node.featuredImage.node !== null  &&
                            <img src={node.node.featuredImage.node.sourceUrl} alt="top-img" />
                        }   
                    </div>                       
                    <ul>
                        <li><span><i className="fa fa-user" aria-hidden="true"></i></span>{node.node.author.node.name}</li>
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
                    ... on WpCptuiPortfolio {
                      id
                      title
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
      allWpCptuiTestimonial {
        edges {
          node {
            title
            content
            featuredImage {
              node {
                sourceUrl
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
      allWpPost(limit: 3, sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            slug
            content
            link
            excerpt
            date(formatString: "MMMM DD, YYYY")
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