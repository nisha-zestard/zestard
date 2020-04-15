import React, { Component } from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import './../assets/scss/index.scss'
import Layout from "../components/layout"
import Slider from "react-slick";
import Counterbg from "../images/counter-bg.png"

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
        const data = this.props.data  
        const header = data.allWordpressPage.edges[0].node.acf;
        const clientlogo = data.allWordpressWpClients.edges;
        const expertise = header.home_content_modules_page[0];
        const counter = data.wordpressAcfOptions.options;
        const testimonial = data.allWordpressWpTestimonials.edges;
        const credential = data.allWordpressWpCredentials.edges;
        const recentpost = data.allWordpressPost.edges;
        const portfolio = data.allWordpressWpPortfolio.edges;
        // console.log(portfolio);
        var testisettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          var clilogosettings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1
          }; 
  return(
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* banner-section  */}
    <section>
        <div className="page-banner home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">        
                        <h1 dangerouslySetInnerHTML={{ __html: header.header_section_title }} />
                        <p>{header.header_sub_text}</p>
                    </div>
                    <div className="col-md-6 text-right">
                        {header.header_mascot.source_url !== null &&
                            <img src={header.header_mascot.source_url} alt="banner-img" />
                        }                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Services-section */}
    <section>
        <div className="our-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-6">
                        <div className="title">
                            <h2>{header.gen_content_modules_page[0].pis_section_title}</h2>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <p>{header.gen_content_modules_page[0].pis_content}</p>
                    </div>
                </div>
                <div className="services-inner">
                    <div className="card-deck">  
                    {header.gen_content_modules_page[1].cs_cards_details.map((node,index) => (                           
                        <div className="card" key={index}>  
                            {node.cs_icon.source_url !== null &&
                                <img className="card-img-top" src={node.cs_icon.source_url} alt="service-img"></img>                              
                            }                            
                            <div className="card-body">
                                <h5 className="card-title">{node.cs_title}</h5>
                                <div className="card-text" dangerouslySetInnerHTML={{ __html: node.cs_content }} ></div>
                                <a className="l-more" href={node.cs_learn_more_link}>Learn More</a>
                            </div>
                        </div>                        
                    ))} 
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Portfolio-section */}
    <section>
	<div className="recent-work portfolio">
		<div className="container">
			<div className="title text-left">
				<h2>Our Portfolio</h2>
			</div>
			<div className="portfolio-list">
				<div className="row">
                    {portfolio.map((node,index) => (
                        <div className={node.node.title === "Panache Cosmetics" ? 'col-md-12 full-col' : 'col-md-6 half-col'} key={index}>
                            <div className="portfolio-wrap">
                                <div className="portfolio-image">
                                    {node.node.featured_media.source_url !== null &&
                                        <img src={node.node.featured_media.source_url} alt={node.node.title} />
                                    }                                    
                                </div>
                                <div className="portfolio-content">
                                    <span className="sub-title">Web Platform</span>
                                    <h2 className="portfolio-title">{node.node.title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />
                                    <a href="#" className="portfolio-link">Read more</a>
                                </div>
                            </div>
                        </div>
                    ))}
                   
				</div>
			</div>
		</div>
	</div>
</section>
    {/* Clients-section */}
    <section>
        <div className="clients-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Clients</h2>
                </div>
                <div className="clients-logos">
                    <ul>
                        {clientlogo.map((node,index) => (
                            <li key={index}>
                                {node.node.featured_media.source_url !== null &&
                                    <a href="#"><img src={node.node.featured_media.source_url} alt="c-logo-img" /></a>
                                }                                
                            </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* expertise-section */}
    <section>
        <div className="expertise-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="title">
                            <h2>{expertise.home_oe_section_title}</h2>
                            <p>{expertise.home_oe_content}</p>
                            <a className="btn r-more" href={expertise.home_oe_read_more_link}>read more</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="experience-wrap">
                            <ul>
                                {expertise.home_oe_right_icons.map((node,index) => (
                                    <li key={index}>
                                        {node.home_oe_icons.source_url !== null &&
                                            <a href="#"><img src={node.home_oe_icons.source_url} alt="f-logo-img" /></a>
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
    <section>
        <div className="testimonials-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Testimonials</h2>
                </div>
                <div className="container">
                    <div id="carouselTestimonial" className="carousel carousel-testimonial slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <Slider ref={c => (this.slider = c)} {...testisettings}>
                            {testimonial.map((node,index) => (
                                <div className={index=0? 'carousel-item': 'carousel-item active'} key={index}>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="testimonial-img">
                                                {node.node.featured_media.source_url !== null &&                                                
                                                    <img className="d-block w-100" src={node.node.featured_media.source_url} alt={node.node.title} />
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h5 className="title">{node.node.title}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: node.node.content }} />
                                            <div className="next-pre">
                                                <button className="button" onClick={this.previous}>
                                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                </button> 
                                                <button className="button" onClick={this.next}>
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                </button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Credentials section */}
    <section>
        <div className="credentials-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Credentials</h2>
                </div>
                <ul>
                <Slider {...clilogosettings}>
                    {credential.map((node,index) => (
                        <li key={index}>
                            <div className="box">
                                {node.node.featured_media.source_url !== null &&
                                    <img src={node.node.featured_media.source_url} alt="cre-img" />
                                }                                
                            </div>
                        </li>
                    ))} 
                </Slider>                   
                </ul>
            </div>
        </div>
    </section>
    {/* News & Blog section */}
    <section>
        <div className="news-Blog-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Read Our Latest News & Blog</h2>
                </div>
                <div className="row">
                    {recentpost.map((node,index)=>(
                        <div className="col-md-6" key={index}>
                            <div className="box">
                                {node.node.featured_media.source_url !== null &&
                                    <img src={node.node.featured_media.source_url} alt="top-img" />
                                }                                
                                <ul>
                                    <li><span><i className="fa fa-user" aria-hidden="true"></i></span>{node.node.author.name}</li>
                                    <li><span><i className="fa fa-calendar" aria-hidden="true"></i></span>{node.node.featured_media.date}</li>
                                </ul>
                                <p dangerouslySetInnerHTML={{ __html: node.node.excerpt }}/>
                                <div className="button">
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  </Layout>
)}}
export default Home

export const query = graphql`
{
    allWordpressWpPortfolio(filter: {title: {in: ["Panache Cosmetics","JadeBlue Fashion","Purvidoshi"]}}) {
        edges {
          node {
            title
            excerpt
            featured_media {
              source_url
            }
          }
        }
      }
    allWordpressPage(filter: {wordpress_id: {eq: 2}}) {
        edges {
          node {
            acf {
                header_section_title
                header_page_title
                header_sub_text
                home_mascot_class
                header_mascot {
                    source_url
                }                
                gen_content_modules_page {
                    ... on WordPressAcf_gen_page_intro_section {
                        id
                        pis_section_title
                        pis_content
                        pis_section_class
                    }
                    ... on WordPressAcf_gen_cards_section {
                        id
                        cs_cards_details {
                            cs_icon {
                            source_url
                            }
                            cs_title
                            cs_content
                            cs_learn_more_link
                        }
                    }                    
                }
                home_content_modules_page {
                    home_oe_section_title
                    home_oe_content
                    home_oe_read_more_link
                    home_oe_right_icons {
                      home_oe_icons {
                        source_url
                      }
                    }
                }
            }
          }
        }
      }
      allWordpressWpClients {
        edges {
          node {
            featured_media {
              source_url
            }
            title
          }
        }
      }
      wordpressAcfOptions {
        options {
          cs_section_class
          cs_counter_details {
            cs_label
            cs_number
          }
        }
      }
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
      allWordpressWpCredentials {
        edges {
          node {
            featured_media {
              source_url
            }
          }
        }
      }
      allWordpressPost(sort: {order: DESC, fields: date}, limit: 2) {
        edges {
          node {
            content
            slug
            link
            excerpt
            featured_media {
              source_url
              date(formatString: "MMMM DD, YYYY")
            }
            author {
              name
            }
          }
        }
      }
}
`