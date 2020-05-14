import React, { Component } from "react"
import Credentialsimage from "./../../assets/images/credientials-bg.png"
import Zectopus from "./../../assets/images/zectopus.png"
import Serviceicon from "./../../assets/images/m-service-icon.png"
import Serviceiconhover from "./../../assets/images/m-service-icon-hover.png"
import SEO from "./../../components/seo"
import Layout from "./../../components/layout"
import AboutProject from './../../components/aboutproject'

class Market extends Component {	
	render() {
		const data = this.props.data;
		const page = data.allWordpressPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const creden = data.allWordpressWpCredentials.edges;
		const portfolio = data.allWordpressWpPortfolio.edges;
		//console.log(portfolio);

		return(
			<Layout>
				<SEO title="Market"/>
				<section>
					<div className="page-banner market">
						<div className="container">
							<div className="row">
								<div className="col-md-6 banner-content-wrap d-flex align-items-center">
									<div className="banner-content">
										<h1 dangerouslySetInnerHTML={{__html: page.header_section_title}} />
										{page.header_sub_text !== null &&
											<div dangerouslySetInnerHTML={{__html: page.header_sub_text}} />
										}										
									</div>
								</div>
								<div className="col-md-6 banner-image-wrap">
									<div className="banner-image">
										{page.header_mascot.source_url !== null &&
											<img src={page.header_mascot.source_url} alt="Market banner"/>
										}										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="what-we-offer">
						<div className="container">
							<div className="top-content">
								<div className="title text-center">
									<h2>{genmodule[0].pis_section_title}</h2>
								</div>
								<div className="text">
									{genmodule[0].pis_content !== null &&
										<div dangerouslySetInnerHTML={{__html: genmodule[0].pis_content}} />
									}									
								</div>
							</div>
							<div className="market-services-list">
								<div className="row">
									{genmodule[1].cs_cards_details.map((node,index) => (
										<div className="col-md-6 col-lg-4 m-ser-wrap" key={index}>
											<div className="m-ser-wrap-inner">
												{node.cs_icon !== null &&
													<div className="m-ser-icon">
														<img src={Serviceicon} className="ser-icon" alt=""/>
														<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
													</div>
												}												
												<h2 className={index === 0 ? 'service-main-title' : 'm-ser-title'}>{node.cs_title}</h2>
												{node.cs_content !== null &&
													<div className="m-ser-text" dangerouslySetInnerHTML={{__html: node.cs_content}} />
												}												
											</div>
										</div>
									))}									
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="links-earned">
						<div className="container">
							<div className="title text-center">
								<h2>{genmodule[2].ls_section_title}</h2>
							</div>
							<ul className="links-earned-list">
								{genmodule[2].ls_link_images.map((node,index) => (
									<li key={index}>
										<div className="links-earned-wrap">
											{node.ls_image.source_url !== null &&
												<img src={node.ls_image.source_url} alt="Links earned"/>
											}											
										</div>
									</li>
								))}								
							</ul>
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
						<img src={Credentialsimage} className="main-image" alt="Credential main"/>
						<img src={Zectopus} className="center-image" alt="Zectopus"/>
						{creden.map((node,index) => (
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
								<h2>{genmodule[3].css_title}</h2>
								<p dangerouslySetInnerHTML={{__html: genmodule[3].css_content}} />
							</div>
							<div className="portfolio-list">
								<div className="row">
									{portfolio.map((node,index) => (
										<div className="col-md-6" key={index}>
											<div className="portfolio-wrap">
												<div className="portfolio-image">
													{node.node.featured_media.source_url !== null &&
														<img src={node.node.featured_media.source_url} alt={node.node.title}/>
													}													
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
				{/* <Link to="/">Go back to the homepage</Link> */}
			</Layout>
		)
	}
}

export default Market

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
	allWordpressWpCredentials(filter: {credentials_category: {eq: 218}}) {
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
	allWordpressPage(filter: {wordpress_id: {eq: 6968}}) {
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
				  pis_section_title
				  pis_content
				  pis_section_class
				}
				... on WordPressAcf_gen_cards_section {
				  id
				  cs_cards_details {
					cs_icon {
					  source_url
					}
					cs_title
					cs_content
				  }
				}
				... on WordPressAcf_gen_links_section {
				  id
				  ls_section_class
				  ls_section_title
				  ls_link_images {
					ls_image {
					  source_url
					}
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