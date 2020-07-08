import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import SEO from "../../components/seo"
import AboutProject from '../../components/aboutproject'

class WordpressDevelopment extends Component {

	render() {		
		const data = this.props.data  
		const acf = data.allWordpressPage.edges[0].node.acf
		const pagedata = acf.gen_content_modules_page
		//console.log(acf);
		return(
			<Layout>
				<SEO title="E-commerce Development"/>
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<section>
						<div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>Website Development</h1>
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
												<a href="#">Website Development</a>
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
											{acf.header_mascot !== null &&
												<img src={pagedata[0].iwc_layout_details[0].iwc_image.source_url} alt="" />
											}											
										</div>
									</div>
									<div className="col-md-6 baner-content-wrap">
										<div className="content-wrap" dangerouslySetInnerHTML={{__html: pagedata[0].iwc_layout_details[0].iwc_sub_desc}} />											
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">Our Website Services</h2>
								<div className="services-list">
									<div className="row">
									{pagedata[1].cs_cards_details.map((node,index) => (
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
						{/* <div className="wordpress-services">
							<div className="container">
								<h2 className="section-title text-center">Our Wordpess Servcies</h2>								
								<div className="services-list">
									<div className="row">
										{pagedata[1].cs_cards_details.map((node,index) => (
											<div className="col-md-6 col-lg-4" key={index}>
												<div className="flip-card">
													<div className="flip-card-inner">
														<div className="flip-card-front">
															{node.cs_icon !== null &&
																<img src={node.cs_icon.source_url} />														
															}															
															<h3>{node.cs_title}</h3>
														</div>
														<div className="flip-card-back">
															<h3>{node.cs_title}</h3>
															<div dangerouslySetInnerHTML={{__html: node.cs_content}} />															
														</div>
													</div>
												</div>
											</div>
										))}
										
									</div>
								</div>
							</div>
						</div> */}
					</section>
				</div>
				<section>
					<AboutProject />				
				</section>
	  </Layout>
		)
	}

}

export default WordpressDevelopment

export const query = graphql`
{
	allWordpressPage(filter: {wordpress_id: {eq: 7271}}) {
		edges {
		  node {
			acf {
			  header_sub_text
			  header_section_title
			  header_mascot {
				source_url
			  }
			  header_page_title
			  home_mascot_class
			  gen_content_modules_page {
				... on WordPressAcf_gen_image_with_content {
				  id
				  iwc_layout_details {
					iwc_image {
					  source_url
					}
					iwc_sub_desc
				  }
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
			}
		  }
		}
	}
}`