import React, { Component } from "react"
import Layout from "./../../components/layout"
import SEO from "./../../components/seo"
import AboutProject from './../../components/aboutproject'

class WordpressDevelopment extends Component {

	render() {		
		return(
			<Layout>
				<SEO title="E-commerce Development"/>
				<div id="page" className="wordpress-development">
				<section>
						<div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>E-commerce Development</h1>
									</div>
									<div className="breadcums-wrap">
										<ul className="d-flex justify-content-center m-0 p-0">
											<li>
												<a href="javascript:;">Home</a>
											</li>
											<li>
												<a href="javascript:;">Services</a>
											</li>
											<li>
												<a href="javascript:;">Wordpress Development</a>
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
										
										</div>
									</div>
									<div className="col-md-6 baner-content-wrap">
										<div className="content-wrap">
											<p>Our website developers provide expert web application development and web design services to our clients. Appnovation offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, 
												to building custom e-commerce and intranet experiences using the latest and proven web technologies.</p>
											<p>With up to 85% of consumers visiting company’s or service provider’s website before making a purchase.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="wordpress-services">
							<div className="container">
								<h2 className="section-title text-center">Our Wordpess Servcies</h2>
								<div className="services-list">
									<div className="row">
										<div className="col-md-6 col-lg-4">
											<div className="flip-card">
												<div className="flip-card-inner">
													<div className="flip-card-front">
														<h3>Wordpress Website Design</h3>
													</div>
													<div className="flip-card-back">
														<h3>Wordpress Website Design</h3>
														<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis tellus ac nisi suscipit.sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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