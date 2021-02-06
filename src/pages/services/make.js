import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Header from "../../components/header";
import SEO from "../../components/seo";
import { removePre } from "../../util/common";
import AboutProject from "../../components/aboutproject";
import Credentials from "../../components/Credentails";
import OurRecentWork from "../../components/OurRecentWork";
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";

class Make extends Component {
	render() {
		const data = this.props.data;
		const pageacf = data.allWpPage.edges[0].node.acf;
		const acfgen = pageacf.gen_content_modules_page;
		const technology = data.allWordpressWpTechnology.edges;
		const credential = acfgen[3].cred_logos_repeater;
		const portfolio = data.allWordpressWpPortfolio.edges;
		const sertech = data.allWpPage.edges[0].node;
		
		return (
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="darkheader" />
				<div className="make-main">
					<ServiceHero
						title={pageacf.header_section_title}
						subText={pageacf.header_sub_text}
						image={pageacf.header_mascot.source_url}
						background={"linear-gradient(-47deg, #0784a5, #03168e)"}
					/>
					<section>
						<div className="make-services">
							<div className="container">
								<ServiceIntro
									title={acfgen[0].pis_page_title}
									sectionTitle={acfgen[0].pis_section_title}
									content={acfgen[0].pis_content}
								/>
								<div className="services-list">
									<div className="row">
										{acfgen[1].cs_cards_details.map((node, index) => (
											<div className="col-lg-3 col-md-6" key={index}>
												<Link to={`/${removePre(node.cs_learn_more_link)}`}>
													<div className="card service-wrap">
														<div className="card-header d-flex">
															<div className="service-icon">
																{node.cs_icon !== null &&
																	<img src={node.cs_icon.source_url} className="main-image" alt="Service icon" />
																}
																{node.cs_hover_icon.source_url !== null &&
																	<img src={node.cs_hover_icon.source_url} className="hover-image" alt="Service hover icon" />
																}
															</div>
															<h2 className="s-title" dangerouslySetInnerHTML={{ __html: node.cs_title }} />
														</div>
														<div className="card-body">
															{node.cs_content !== null &&
																<div className="text" dangerouslySetInnerHTML={{ __html: node.cs_content }} />
															}
															<span className="s-link">Learn More</span>
														</div>
													</div>
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="technology">
							<div className="container">
								<div className="title text-center">
									<h2>Our Technology</h2>
								</div>
								<div className="technology-list">
									<div className="row">
										{technology.map((node, index) => (
											<div className="col-md-6 technology-outer-wrap" key={index}>
												<div className="technology-wrap">
													<div className="icon-wrap">
														{node.node.featured_media.source_url !== null &&
															<img src={node.node.featured_media.source_url} alt={node.node.title + " Technology Logo"} />
														}
													</div>
													<div className="content-wrap">
														<h3>{node.node.title}</h3>
														{node.node.excerpt !== null &&
															<div dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />

														}
														<Link to={`/${removePre(node.node.acf.technology_custom_link)}`}>Learn More</Link>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Credentials section */}
					<Credentials credentials={credential} slidesToShow={5} />
					<OurRecentWork
						title={acfgen[2].css_title}
						content={acfgen[2].css_content}
						portfolio={portfolio}
					/>
					<AboutProject apsiwtch={pageacf.use_common_contact_section} />
				</div>
			</Layout>
		)
	}

}

export default Make;

export const query = graphql`{
	allWordpressWpTechnology(sort: {order: DESC, fields: date}) {
		edges {
		  node {			
			acf {
				technology_custom_link
			}
			title
			featured_media {
			  source_url
			  link
			}
			excerpt			
		  }
		}
	}
	allWordpressWpPortfolio(filter: {tags: {elemMatch: {wordpress_id: {eq: 232}}}}, limit: 2) {
        edges {
          node {

            title
            excerpt
            link
            featured_media {
              source_url
            }
            acf {
              pf_image_with_responsive {
                source_url
              }
            }
          }
        }
    }
	allWordpressWpCredentials(filter: {credentials_category: {eq: 216}}) {
		edges {
		  node {
			featured_media {
			  source_url
			}
			title
			slug
		  }
		}
	  }
	allWpPage(filter: {wordpress_id: {eq: 6956}}) {
		edges {
		  node {
			yoast_title
			yoast_meta {
				content
			}
			acf {
			  home_mascot_class
			  header_section_title
			  header_sub_text
			  header_mascot {
				source_url
			  }
			  use_common_contact_section
			  tuabp_title
			  tuabp_image {
				source_url
			  }
			  tuabp_content
			  tuabp_button_text
			  tuabp_button_link
			  gen_content_modules_page {
				... on WordPressAcf_gen_page_intro_section {
				  id
				  pis_page_title
				  pis_section_title
				  pis_content
				  pis_section_class
				}
				... on WordPressAcf_gen_cards_section {
				  id
				  cs_section_class
				  cs_cards_details {
					cs_icon {
						source_url
					}
					cs_hover_icon {
						source_url
					}
					cs_title
					cs_content
					cs_learn_more_link
				  }
				}
				... on WordPressAcf_gen_case_study_section {
				  id
				  css_title
				  css_content
				  css_section_class
				}
				... on WordPressAcf_gen_credential_logos {
					id
					cred_logos_repeater {
					  cred_logos_list {
						source_url
					  }
					}
				}  
			  }
			}
		  }
		}
	}
}`