import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import SEO from "../../components/seo"
import { removePre } from './../../util/common'
import AboutProject from '../../components/aboutproject'

class ReactjsDevelopment extends Component {
	render() {		
		const data = this.props.data  
		const acf = data.allWordpressPage.edges[0].node.acf
		const pagedata = acf.gen_content_modules_page
		// const platform = pagedata[2].iwc_layout_details
		console.log(acf);
		return(
			<Layout>
				<SEO title="Website Development"/>
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<section>
						<div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>{pagedata[0].iwc_layout_details[0].iwc_title}</h1>
									</div>
									<div className="breadcums-wrap">
										<ul className="d-flex justify-content-center m-0 p-0">
											<li><Link to="#">Home</Link></li>
											<li><Link to="#">Services</Link></li>
											<li><Link to="#">{pagedata[0].iwc_layout_details[0].iwc_title}</Link></li>
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
								<h2 className="section-title text-center">{pagedata[1].cs_section_title}</h2>
								<div className="services-list">
									<div className="row">
									{pagedata[1].cs_cards_details.map((node,index) => (
											<div className="col-md-6 col-lg-4" key={index}>
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
					{/* <section>
						<div className="platform-section">
							<div className="container">
								<h2 className="section-title text-center">Platforms We Work On</h2>
								{platform.map((node,index) => (
									<div className={"platform-wrap "+node.iwc_section_class} key={index}>
										<div className="row">
											{node.iwc_section_class === 'odd' &&
												<div className="col-md-7 platform-image-wrap">
													<div className="image text-center">
														{node.iwc_image !== null &&
															<img src={node.iwc_image.source_url} alt="Platform odd"/>
														}
													</div>
												</div>
											}											
											<div className="col-md-5 platform-content-wrap">
												<div className="content-inner">
													<div className="p-title d-flex align-items-center">
														{node.iwc_icon !== null &&
															<img src={node.iwc_icon.source_url} alt="Platform center" />
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
															<img src={node.iwc_image.source_url} alt="Plateform even" />
														}
													</div>
												</div>
											}
										</div>
									</div>
								))}
							</div>
						</div>
					</section> */}
				</div>
				<AboutProject 
					apsiwtch={acf.use_common_contact_section} 
					apimage={acf.tuabp_image} 
					aptitle={acf.tuabp_title} 
					apcontent={acf.tuabp_content} 
					apbuttontext={acf.tuabp_button_text} 
					apbuttonlink={acf.tuabp_button_link} />
	  </Layout>
		)
	}

}
export default ReactjsDevelopment

export const query = graphql`
{
	allWordpressPage(filter: {wordpress_id: {eq: 7452}}) {
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
					  iwc_image {
						source_url
					  }
					  iwc_sub_desc
					  iwc_icon {
						source_url
					  }
					  iwc_section_class
					  iwc_title
					}
				  }
				  ... on WordPressAcf_gen_cards_section {
					id
					cs_section_title
					  cs_section_class
					cs_cards_details {
					  cs_icon {
						source_url
					  }
					  cs_title
					  cs_content
					  cs_learn_more_link
					}
				  }
				  ... on WordPressAcf_gen_case_study_section {
					css_title
					css_content
					css_select_case_studies
					css_section_class
				  }
				}
			  }
			}
		  }
	  }
}`