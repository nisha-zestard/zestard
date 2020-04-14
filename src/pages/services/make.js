import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "./../../components/layout"
// import SEO from "../components/seo"

import Credentialsimage from "./../../assets/images/credientials-bg.png"
import Zectopus from "./../../assets/images/zectopus.png"
import AboutProject from './../../components/aboutproject'


class Make extends Component {

	render() {
		const data = this.props.data;
		const pageacf = data.allWordpressPage.edges[0].node.acf;
		const acfgen = pageacf.gen_content_modules_page;
		const technology = data.allWordpressWpTechnology.edges;
		const credential = data.allWordpressWpCredentials.edges;
		const portfolio = data.allWordpressWpPortfolio.edges;
		
		return(
			<Layout>
				<section>
					<div className="page-banner make">
						<div className="container">
							<div className="row">
								<div className="col-md-6 d-flex align-items-center">
									<div className="banner-content">
										<h1 dangerouslySetInnerHTML={{ __html: pageacf.header_section_title }}/>
										<p dangerouslySetInnerHTML={{__html : pageacf.header_sub_text}} />
									</div>
								</div>
								<div className="col-md-6">
									<div className="banner-image">
										{pageacf.header_mascot.source_url !== null &&
											<img src={pageacf.header_mascot.source_url}  alt="Make Banner"/>
										}										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="make-services">
						<div className="container"> 
							<div className="services-top">
								<div className="row align-items-center">
									<div className="col-lg-3">
										<div className="title">
											<span>{acfgen[0].pis_page_title}</span>
											<h2>{acfgen[0].pis_section_title}</h2>
										</div>
									</div>
									<div className="col-lg-9 right-wrap">
										<div className="content">
											<p dangerouslySetInnerHTML={{__html: acfgen[0].pis_content}} />
										</div>
									</div>
								</div>
							</div>
							<div className="services-list"> 
								<div className="row">
									{acfgen[1].cs_cards_details.map((node,index) => (
										<div className="col-lg-3 col-md-6" key={index}>
											<div className="card service-wrap">
												<div className="service-icon">
													{node.cs_icon.source_url !== null &&
														<img src={node.cs_icon.source_url}/>
													}
													
												</div>
												<div className="card-body">
													<h2 className="s-title" dangerouslySetInnerHTML={{__html: node.cs_title}} />
													<p className="text" dangerouslySetInnerHTML={{__html:node.cs_content}} />
													<a href="#" className="s-link">Learn More</a>
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
					<div className="technology">
						<div className="container">
							<div className="title text-center">
								<h2>Our Technology</h2>
							</div>
							<div className="technology-list">
								<div className="row">
									{technology.map((node,index) => (
										<div className="col-md-6 technology-outer-wrap" key={index}>
											<div className="technology-wrap">
												<div className="icon-wrap">
													{node.node.featured_media.source_url !== null &&
														<img src={node.node.featured_media.source_url}  alt={node.node.title+" Technology Logo"}/>
													}													
												</div>
												<div className="content-wrap">
													<h3>{node.node.title}</h3>
													<p dangerouslySetInnerHTML={{__html: node.node.excerpt}} />
													<a href="#">Learn More</a>
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
				<div className="our-credientials">
					<div className="container">
					<div className="title text-center">
						<h2>Our Credentials</h2>
					</div>
					<div className="credientials-wrap text-center">
						<div className="c-main">
						<img src={Credentialsimage} className="main-image" alt="Crendetial main background"/>
						<img src={Zectopus} className="center-image" alt="Credential zectopus"/>
						{credential.map((node,index) => (
							<div className={"creadi_wrap " + node.node.slug} key={index}>
								{node.node.featured_media.source_url !== null &&
									<img src={node.node.featured_media.source_url} alt={node.node.title}/>
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
								<h2>Our Recent Work</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</div>
							<div className="portfolio-list">
								<div className="row">
									{portfolio.map((node,index) => (
										<div className="col-md-6" key={index}>
										<div className="portfolio-wrap">
											<div className="portfolio-image">
												{node.node.featured_media.source_url !== null &&
													<img src={node.node.featured_media.source_url} alt={node.node.title} />
												}												
											</div>
											<div className="portfolio-content">
												<span className="sub-title">Web Platform</span>
												<h2 className="portfolio-title">{node.node.title}</h2>
												<p>{node.node.expert}</p>
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

export default Make

export const query = graphql`{
	allWordpressWpTechnology {
		edges {
		  node {
			title
			featured_media {
			  source_url
			  link
			}
			excerpt			
		  }
		}
	}
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
	allWordpressPage(filter: {wordpress_id: {eq: 6956}}) {
		edges {
		  node {
			acf {
			  home_mascot_class
			  header_section_title
			  header_sub_text
			  header_mascot {
				source_url
			  }
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