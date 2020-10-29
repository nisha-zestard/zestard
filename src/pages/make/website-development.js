import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import AboutProject from "../../components/aboutproject";
import ServiceDetailHeader from "../../components/ServiceDetailHeader";
import ServiceBasicDetail from "../../components/ServiceBasicDetail";
import PlatformWeWork from "../../components/PlatformWeWork";

class WordpressDevelopment extends Component {
	render() {
		const data = this.props.data;
		const acf = data.allWordpressPage.edges[0].node.acf;
		const pagedata = acf.gen_content_modules_page;
		const platform = pagedata[1].iwc_layout_details;
		const sertech = data.allWordpressPage.edges[0].node;

		return (
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="lightheader" />
				<div id="page" className="website-development">
					<ServiceDetailHeader title={'Website Development'} />
					<ServiceBasicDetail
						headerMascot={acf.header_mascot}
						serviceDeail={pagedata[0].iwc_layout_details[0]}
					/>
					{/* <section>
						<div className="ecommerce-sercices-wrap">
							<div className="container">
								<h2 className="section-title text-center">Our Website Services</h2>
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
					</section> */}
					<PlatformWeWork platform={platform} />
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
export default WordpressDevelopment;

export const query = graphql`
{
	allWordpressPage(filter: {wordpress_id: {eq: 7271}}) {
		edges {
		  node {
			title
			yoast_title
			yoast_meta {
				content
			}
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
					iwc_button_text
                	iwc_button_link
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