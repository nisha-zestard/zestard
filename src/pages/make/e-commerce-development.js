import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./../../components/layout"
import Header from "../../components/header";
import SEO from "./../../components/seo"
import { removePre } from './../../util/common'
import AboutProject from './../../components/aboutproject' 

class EcommerceDevelopment extends Component {

	render() {	
		const data = this.props.data  
		const acf = data.wordpressPage.acf.gen_content_modules_page
		const banner = acf[0].iwc_layout_details[0]
		const services = acf[1].cs_cards_details
		const platform = acf[2].iwc_layout_details
		
		return(
			<Layout>
				<SEO title="E-commerce Development"/>
				<Header headernavclass="lightheader" />
				<div id="page" className="ecommerce-development">
					<section>
						<div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>E-commerce Development</h1>
									</div>
									<div className="breadcums-wrap">
										<ul className="d-flex justify-content-center m-0 p-0">
											<li>
												<a href="#">Home</a>
											</li>
											<li>
												<a href="#">Services</a>
											</li>
											<li>
												<a href="#">E-commerce Development</a>
											</li>
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
												<img src={banner.iwc_image.source_url} />
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
								<h2 className="section-title text-center">Our Ecommerce Services</h2>
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
					<section>
						<div className="platform-section">
							<div className="container">
								<h2 className="section-title text-center">Platforms We Work On</h2>
								{platform.map((node,index) => (
									<div className={"platform-wrap "+node.iwc_section_class}>
										<div className="row">
											{node.iwc_section_class === 'odd' &&
												<div className="col-md-7 platform-image-wrap">
													<div className="image text-center">
														{node.iwc_image !== null &&
															<img src={node.iwc_image.source_url} />
														}
													</div>
												</div>
											}											
											<div className="col-md-5 platform-content-wrap">
												<div className="content-inner">
													<div className="p-title d-flex align-items-center">
														{node.iwc_icon !== null &&
															<img src={node.iwc_icon.source_url} />
														}
														<h4>{node.iwc_title}</h4>
													</div>
													<div className="p-desc" dangerouslySetInnerHTML={{__html: node.iwc_sub_desc}} />														
													<div className="know-more-btn">
														<Link to={`/${removePre(node.iwc_button_link)}`}>Know More</Link>
													</div>
												</div>
											</div>
											{node.iwc_section_class === 'even' &&
												<div className="col-md-7 platform-image-wrap">
													<div className="image text-center">
														{node.iwc_image !== null &&
															<img src={node.iwc_image.source_url} />
														}
													</div>
												</div>
											}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					<section>
						<AboutProject />				
					</section>
				</div>
	  		</Layout>
		)
	}

}

export default EcommerceDevelopment

export const query = graphql`
{
	wordpressPage(wordpress_id: {eq: 1491}) {
		acf {
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