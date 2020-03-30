import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "./../../components/layout"
import Credentialsimage from "./../../assets/images/credientials-bg.png"
import Zectopus from "./../../assets/images/zectopus.png"
import Mascot from "./../../assets/images/Mascot.png"
import Portfolioone from "./../../assets/images/portfolio-01.jpg"
import Portfoliotwo from "./../../assets/images/portfolio-02.jpg"
import Wordpressmaintenance from "./../../assets/images/Wordpress-Maintenance.png"

import AboutProject from './../../components/aboutproject'

class Maintain extends Component {
	render() {
		const data = this.props.data;
		const page = data.allWordpressPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const credent = data.allWordpressWpCredentials.edges;
		const portfolio = data.allWordpressWpPortfolio;

		return(
			<Layout>
				<section>
					<div className="page-banner maintain">
						<div className="container">
							<div className="row">
								<div className="col-md-6 d-flex align-items-center">
									<div className="banner-content">
										<h1 dangerouslySetInnerHTML={{__html: page.header_section_title}} />
										<p dangerouslySetInnerHTML={{__html: page.header_sub_text}} />
									</div>
								</div>
								<div className="col-md-6">
									<div className="banner-image">
										<img src={page.header_mascot.source_url} alt="Maintain banner"/>
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
								<span>{genmodule[0].pis_page_title}</span>
								<h2>{genmodule[0].pis_section_title}</h2>
							</div>
							<div className="content">
								<p dangerouslySetInnerHTML={{__html: genmodule[0].pis_content}} />
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
													<img src={node.iwc_image.source_url} />
												</div>
											</div>
										}
										<div className="col-md-6 maintain-service-content">
											<div className="ser-contain">
												<h2 className="service-title">{node.iwc_title}</h2>
												<p className="service-text" dangerouslySetInnerHTML={{__html: node.iwc_sub_desc}} />
												<a href="#" className="service-link">{node.iwc_button_text}</a>
											</div>
										</div>
										{index % 2 === 0 &&
											<div className="col-md-6 maintain-service-image">
												<div className="ser-image">
													<img src={node.iwc_image.source_url} />
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
											<img src={Wordpressmaintenance} />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hire-dev-content">
											<h2 className="hire-dev-title">Hire Dedicated Developers for Extensive Support</h2>
											<div className="hire-dev-text">
												<p>Skilled developers are a great asset to any company. They bring value to your business with their profound knowledge and strong expertise. 
													Our developers undergo technical training to ensure you a business-oriented complete solution.</p>
													<ul>
														<li>Hire Magento Developer</li>
														<li>Hire Shopify Developer</li>
														<li>Hire WooCommerce Developer</li>
														<li>Hire Wordpress Developer</li>
														<li>Hire Drupal Developer</li>
														<li>Hire Angular Developer</li>
													</ul>
													<a href="#">Get Started</a>
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
											<img src={node.node.featured_media.source_url} alt={node.node.title} />
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
								<p dangerouslySetInnerHTML={{__html: genmodule[2].css_content}} />
							</div>
							<div className="portfolio-list">
								<div className="row">
									{portfolio.edges.map((node,index) => (
										<div className="col-md-6" key={index}>
											<div className="portfolio-wrap">
												<div className="portfolio-image">
													<img src={node.node.featured_media.source_url} />
												</div>
												<div className="portfolio-content">
													<span className="sub-title">Web Platform</span>
													<h2 className="portfolio-title">{node.node.title}</h2>
													<p dangerouslySetInnerHTML={{__html: node.node.excerpt}} />
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
				<Link to="/">Go back to the homepage</Link>
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
	allWordpressPage(filter: {wordpress_id: {eq: 4655}}) {
		edges {
		  node {
			acf {
			  home_mascot_class
			  header_sub_text
			  header_section_title
			  header_mascot {
				source_url
			  }
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