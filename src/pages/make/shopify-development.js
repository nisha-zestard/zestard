import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../../components/layout"
import Header from "../../components/header";
import SEO from "./../../components/seo"
// import { removePre } from './../../util/common'
import AboutProject from './../../components/aboutproject' 

class EcommerceDevelopment extends Component {
	render() {	
		const data = this.props.data  
		const acf = data.wordpressPage.acf.gen_content_modules_page
		const tellus = data.wordpressPage.acf
		const banner = acf[0].iwc_layout_details[0]
		const services = acf[1].cs_cards_details		
		return(
			<Layout>
				<SEO title="UI/UX Development"/>
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
			  cs_cards_details {
				cs_title
				cs_content
			  }
			}
		  }
		}
	  }  
}`