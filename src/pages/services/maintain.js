import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "./../../components/layout";
import Header from "./../../components/header";
import { removePre } from "./../../util/common";
import SEO from "./../../components/seo";
import AboutProject from "./../../components/aboutproject";
import Credentials from "../../components/Credentails";
import OurRecentWork from '../../components/OurRecentWork';
import ServiceHero from "../../components/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro";

class Maintain extends Component {
	render() {
		const data = this.props.data;
		const page = data.allWpPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const credent = genmodule[3].cred_logos_repeater;
		const portfolio = data.allWordpressWpPortfolio.edges;
		const sertech = data.allWpPage.edges[0].node;
		
		return(
			<Layout>
				<SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content} />
				<Header headernavclass="darkheader" />
				<div className="maintain-main">
				<ServiceHero
					title={page.header_section_title}
					subText={page.header_sub_text}
					image={page.header_mascot.source_url}
					background={"linear-gradient(47deg,#2a0845 1%,#6441a5)"}
				/>
				<section>
					<div className="make-intro-section text-left">
						<div className="container">
							<ServiceIntro
								sectionTitle={genmodule[0].pis_section_title}
								content={genmodule[0].pis_content}
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="maintain-services">
						<div className="container">
							{genmodule[1].iwc_layout_details.map((node,index) => (
								<div className={index % 2 === 0? 'maintain-service-wrap odd' : 'maintain-service-wrap even'} key={index}>
									<div className="row">
										{index % 2 === 1 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
													}													
												</div>
											</div>
										}
										<div className="col-md-6 maintain-service-content">
											<div className="ser-contain">
												<h2 className="service-title" dangerouslySetInnerHTML={{__html: node.iwc_title}} />
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
													}													
												</div>
												{node.iwc_sub_desc !== null &&
													<div className="service-text" dangerouslySetInnerHTML={{__html: node.iwc_sub_desc}} />
												}
												<Link to={`/${removePre(node.iwc_button_link)}`} className="service-link">{node.iwc_button_text}</Link>
											</div>
										</div>
										{index % 2 === 0 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													{node.iwc_image.source_url !== null &&
														<img src={node.iwc_image.source_url}  alt="Service icon"/>
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
					<div className="hire-developers-section">
						<div className="container">
							<div className="hire-developers-inner">
								<div className="row">
									<div className="col-lg-6">
										<div className="hire-dev-image">
											{page.maintain_image.source_url !== null &&
												<img src={page.maintain_image.source_url} alt="Hire developers"/>
											}											
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hire-dev-content">
											<h2 className="hire-dev-title">{page.maintain_title}</h2>
											<div className="hire-dev-image">
												{page.maintain_image.source_url !== null &&
													<img src={page.maintain_image.source_url} alt="Hire developers"/>
												}											
											</div>
											<div className="hire-dev-text">
												{page.maintain_content !== null &&
													<p dangerouslySetInnerHTML={{__html: page.maintain_content}} />
												}												
												<ul>
													{page.maintain_list_repeater.map((node,index) => (
														<li key={index}>{node.maintain_list}</li>
													))}
												</ul>
												<Link to={`/${removePre(page.maintain_button_link)}`}>{page.maintain_button_text}</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Credentials section */}
				<Credentials credentials={credent} slidesToShow={5} />
				<OurRecentWork
					title={genmodule[2].css_title}
					content={genmodule[2].css_content}
					portfolio={portfolio}
				/>
				<AboutProject apsiwtch={page.use_common_contact_section} />
				</div>
			</Layout>
		)
	}
}

export default Maintain;

export const query = graphql`{
	allWordpressWpPortfolio(filter: {tags: {elemMatch: {wordpress_id: {eq: 233}}}}, limit: 2) {
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
	allWordpressWpCredentials(filter: {credentials_category: {eq: 219}}) {
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
	allWpPage(filter: {wordpress_id: {eq: 6981}}) {
		edges {
		  node {
			yoast_title
			yoast_meta {
				content
			}
			acf {
			  home_mascot_class
			  header_sub_text
			  header_section_title
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
			  maintain_image {
				source_url
			  }
			  maintain_title
			  maintain_content
			  maintain_list_repeater {
				maintain_list
			  }
			  maintain_button_text
			  maintain_button_link
			  gen_content_modules_page {
				... on WordPressAcf_gen_page_intro_section {
				  id
				  pis_section_class
				  pis_page_title
				  pis_section_title
				  pis_content
				}
				... on WordPressAcf_gen_image_with_content {
				  id
				  iwc_layout_details {
					iwc_image {
					  source_url
					}
					iwc_title
					iwc_sub_desc
					iwc_button_text
					iwc_button_link
					iwc_section_class
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