import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../../components/layout"
import Header from "../../components/header";
import SEO from "./../../components/seo"
import Slider from "react-slick";
// import { removePre } from './../../util/common'
import AboutProject from './../../components/aboutproject' 

class EcommerceDevelopment extends Component {
	render() {	
		const data = this.props.data  
		const acf = data.wordpressPage.acf.gen_content_modules_page
		const tellus = data.wordpressPage.acf
		const banner = acf[0].iwc_layout_details[0]
		const services = acf[1].cs_cards_details
		const testimonial = data.allWordpressWpTestimonials.edges;
		var testisettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };		
		console.log(acf);
		return(
			<Layout>
				<SEO title="Shopify Development"/>
				<Header headernavclass="lightheader" />
				<div id="page" className="ui-ux-development">
					<section>
						<div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>Shopify development</h1>
									</div>
									<div className="breadcums-wrap">
										<ul className="d-flex justify-content-center m-0 p-0">
											<li><Link to="#">Home</Link></li>
											<li><Link to="#">Services</Link></li>
											<li><Link to="#">Shopify development</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="sub-service-baner">
							<div className="container">
								<div className="row">
									<div className="col-md-6 baner-image-wrap">
										<div className="image-wrap">
											{banner.iwc_image !== null &&
												<img src={banner.iwc_image.source_url} alt="Service banner" />
											}											
										</div>
									</div>
									<div className="col-md-6 baner-content-wrap">
										<div className="content-wrap" dangerouslySetInnerHTML={{__html: banner.iwc_sub_desc}} />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">{acf[1].cs_section_title}</h2>
								<div className="services-list">
									<div className="row">
										{services.map((node, index) => (
											<div className="col-md-6 col-lg-4">
												<div className="service-box">
													<div className="ss-title">
														<h2 dangerouslySetInnerHTML={{__html: node.cs_title}} />
													</div>
													<div className="ss-content" dangerouslySetInnerHTML={{__html: node.cs_content}} />													
												</div>
											</div>
										))}
									</div>
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
															{node.node.content !== null &&
																<div dangerouslySetInnerHTML={{ __html: node.node.content }} />
															}                                            
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

export default EcommerceDevelopment

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
	wordpressPage(wordpress_id: {eq: 7511}) {
		acf {
			use_common_contact_section
			tuabp_title
			tuabp_image {
				source_url
			}
			tuabp_content
			tuabp_button_text
			tuabp_button_link
		  gen_content_modules_page {
			... on WordPressAcf_gen_image_with_content {
			  id
			  iwc_layout_details {
				iwc_title
				iwc_image {
				  source_url
				}
				iwc_icon {
					source_url
				  }
				iwc_sub_desc
				iwc_section_class
				iwc_button_text
                iwc_button_link
			  }
			}
			... on WordPressAcf_gen_cards_section {
			  id
			  cs_section_title
			  cs_cards_details {
				cs_title
				cs_content
			  }
			}
		  }
		}
	  }  
}`