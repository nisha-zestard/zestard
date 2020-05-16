import React, { Component } from "react"
// import { Link } from "gatsby"
import Layout from "./../../components/layout"
import Credentialsimage from "./../../assets/images/credientials-bg.png"
import Zectopus from "./../../assets/images/zectopus.png"
import SEO from "./../../components/seo"
import AboutProject from './../../components/aboutproject'

class Maintain extends Component {
	render() {
		const data = this.props.data;
		const page = data.allWordpressPage.edges[0].node.acf;
		const genmodule = data.allWordpressPage.edges[0].node.acf.gen_content_modules_page;
		const credent = data.allWordpressWpCredentials.edges;
		const portfolio = data.allWordpressWpPortfolio;
		//console.log(page);

		return(
			<Layout>
				<SEO title="Maintain"/>
				<section>
					<div className="page-banner maintain">
						<div className="container">
							<div className="row">
								<div className="col-md-6 banner-content-wrap d-flex align-items-center">
									<div className="banner-content">
										<h1 dangerouslySetInnerHTML={{__html: page.header_section_title}} />
										{page.header_sub_text !== null &&
											<p dangerouslySetInnerHTML={{__html: page.header_sub_text}} />
										}										
									</div>
								</div>
								<div className="col-md-6 banner-image-wrap">
									<div className="banner-image">
										{page.header_mascot.source_url !== null &&
											<img src={page.header_mascot.source_url} alt="Maintain banner"/>
										}										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="make-intro-section text-center">
						<div className="container">
							<div className="title">
								{/* <span>{genmodule[0].pis_page_title}</span> */}
								<h2>{genmodule[0].pis_section_title}</h2>
							</div>
							<div className="content">
								{genmodule[0].pis_content !== null &&
									<div dangerouslySetInnerHTML={{__html: genmodule[0].pis_content}} />
								}								
							</div>
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
												<a href="#" className="service-link">{node.iwc_button_text}</a>
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
												<img src={page.maintain_image.source_url} />
											}											
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hire-dev-content">
											<h2 className="hire-dev-title">{page.maintain_title}</h2>
											<div className="hire-dev-text">
												{page.maintain_content !== null &&
													<p dangerouslySetInnerHTML={{__html: page.maintain_content}} />
												}												
												<ul>
													{page.maintain_list_repeater.map((node,index) => (
														<li key={index}>{node.maintain_list}</li>
													))}
												</ul>
												<a href={page.maintain_button_link}>{page.maintain_button_text}</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="our-credientials">
						<div className="container">
							<div className="title text-center">
								<h2>Our Credentials</h2>
							</div>
							<div className="credientials-wrap text-center">
								<div className="c-main">
									<img src={Credentialsimage} className="main-image"/>
									<img src={Zectopus} className="center-image" />
									{credent.map((node,index) => (
										<div className={"creadi_wrap " + node.node.slug} key={index}>
											{node.node.featured_media.source_url !== null &&
												<img src={node.node.featured_media.source_url} alt={node.node.title} />
											}											
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="recent-work">
						<div className="container">
							<div className="title text-center">
								<h2>{genmodule[2].css_title}</h2>
								<div dangerouslySetInnerHTML={{__html: genmodule[2].css_content}} />
							</div>
							<div className="portfolio-list">
								<div className="row">
									{portfolio.edges.map((node,index) => (
										<div className="col-md-6" key={index}>
											<div className="portfolio-wrap">
												<div className="portfolio-image">
													{node.node.featured_media.source_url !== null &&
														<img src={node.node.featured_media.source_url} />
													}													
												</div>
												<div className="portfolio-content">
													<span className="sub-title">Web Platform</span>
													<h2 className="portfolio-title">{node.node.title}</h2>
													<div dangerouslySetInnerHTML={{__html: node.node.excerpt}} />
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
				<section>
					<AboutProject />
				</section>
				{/* <Link to="/">Go back to the homepage</Link> */}
			</Layout>
		)
	}
}

export default Maintain

export const query = graphql`{
	allWordpressWpPortfolio(filter: {title: {in: ["JadeBlue Fashion","Purvidoshi"]}}) {
        edges {
          node {
			title
			excerpt
			path
            featured_media {
              source_url
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
	allWordpressPage(filter: {wordpress_id: {eq: 6981}}) {
		edges {
		  node {
			acf {
			  home_mascot_class
			  header_sub_text
			  header_section_title
			  header_mascot {
				source_url
			  }
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
					css_select_case_studies
					css_section_class
				}
			  }
			}
		  }
		}
	}
}`