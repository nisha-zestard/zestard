import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "./../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import Testimonials from "../../components/TestiMonials";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";

class EcommerceDevelopment extends Component {
	render() {	
		const data = this.props.data;
		const acf = data.wordpressPage.acf.gen_content_modules_page;
		const tellus = data.wordpressPage.acf;
		const banner = acf[0].iwc_layout_details[0];
		const testimonial = data.allWordpressWpTestimonials.edges;
		const services = acf[1].cs_cards_details;
			
		return(
			<Layout>
				<SEO title="UI/UX Development"/>
				<Header headernavclass="lightheader" />
				<div id="page" className="ui-ux-development">
					<ServiceDetailHeader title={'UI/UX'} />
          			<ServiceBasicDetail
						headerMascot={banner.iwc_image}
						serviceDeail={banner}
					/>
					<section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">Our UI UX Services</h2>
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

export default EcommerceDevelopment;

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
	wordpressPage(wordpress_id: {eq: 7275}) {
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
			  cs_cards_details {
				cs_title
				cs_content
			  }
			}
		  }
		}
	  }  
}`
