import React, { Component } from "react"
import { graphql, Link } from "gatsby"
// import Credentialsimage from "./../../assets/images/credientials-bg.png"
// import Zectopus from "./../../assets/images/zectopus.png"
import SEO from "./../../components/seo"
import Slider from "react-slick";
import Layout from "./../../components/layout"
import Header from "./../../components/header"
import AboutProject from './../../components/aboutproject'

class Market extends Component {	
	render() {
		const data = this.props.data;
		const page = data.allWordpressPage.edges[0].node.acf;
		const genmodule = page.gen_content_modules_page;
		const credential = genmodule[4].cred_logos_repeater;
		const portfolio = data.allWordpressWpPortfolio.edges;
		console.log(genmodule);
		var clilogosettings = {
            dots: true,
            infinite: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        }; 
		return(
			<Layout>
				<SEO title="Market"/>
				<Header headernavclass="darkheader" />
				<div className="market-main">
				<section>
					<div className="page-banner market">
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
														{node.cs_icon !== null &&
															<img src={node.cs_icon.source_url} className="ser-icon" alt=""/>
														}
														{node.cs_hover_icon !== null &&
															<img src={node.cs_hover_icon.source_url} className="ser-icon-hover" alt=""/>
														}
														
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
				{/* Credentials section */}
				<section>
					<div className="credentials-section">
						<div className="container">
							<div className="title text-center">
								<h2>Our Credentials</h2>
							</div>  
							<ul>                
								<Slider {...clilogosettings}>
									{credential.map((node,index) => (                            
										<li key={index}>                                
												{node.cred_logos_list.source_url !== null &&
													<div className="box">
													<img src={node.cred_logos_list.source_url} alt="cre-img" />
													</div>
												}                           
										</li>
									))} 
								</Slider>                   
							</ul>
						</div>
					</div>
				</section>
				{/* <section>
				<div className="our-credientials">
					<div className="container">
					<div className="title text-center">
						<h2>Our Certifications</h2>
					</div>
					<div className="credientials-wrap text-center">
						<div className="c-main">
						<img src={Credentialsimage} className="main-image" alt="Credential main"/>
						<img src={Zectopus} className="center-image" alt="Zectopus"/>
						{creden.map((node,index) => (
							<div className={"credi-logo-" + index + " creadi_wrap " + node.node.slug} key={index}>
								{node.node.featured_media.source_url !== null &&
									<img src={node.node.featured_media.source_url} alt={node.node.title}/>
								}								
							</div>
						))}						
						</div>
					</div>
					</div>
				</div>
				</section> */}
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
													{node.node.acf.pf_image_with_responsive.source_url !== null &&
														<img src={node.node.acf.pf_image_with_responsive.source_url} alt={node.node.title}/>
													}													
												</div>
												<div className="portfolio-content">
													<span className="sub-title">Web Platform</span>
													<h2 className="portfolio-title">{node.node.title}</h2>
													<p dangerouslySetInnerHTML={{__html: node.node.excerpt}} />
													<Link to="#" className="portfolio-link">Read more</Link>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
				<AboutProject apsiwtch={page.use_common_contact_section} />
				</div>
			</Layout>
		)
	}
}

export default Market

export const query = graphql`{
	allWordpressWpPortfolio(filter: {tags: {elemMatch: {wordpress_id: {eq: 234}}}}, limit: 2) {
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
					cs_hover_icon{
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