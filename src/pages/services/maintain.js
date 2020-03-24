import React from "react"
import { Link } from "gatsby"

import Layout from "./../../components/layout"
import SEO from "./../../components/seo"

import Bannerimage from "./../../assets/images/top-Banner-maintain.png"
import Credentialsimage from "./../../assets/images/credientials-bg.png"
import Zectopus from "./../../assets/images/zectopus.png"
import Shopify from "./../../assets/images/shopify-experts.png"
import Magento from "./../../assets/images/magento-certification-logo.png"
import Contributor from "./../../assets/images/Contributor-Technology_Partner-stacked.png"
import Aurthorized from "./../../assets/images/authorized.png"
import Wpengin from "./../../assets/images/wpe_social.png"
import Mascot from "./../../assets/images/Mascot.png"
import Portfolioone from "./../../assets/images/portfolio-01.jpg"
import Portfoliotwo from "./../../assets/images/portfolio-02.jpg"
import Wordpressmaintenance from "./../../assets/images/Wordpress-Maintenance.png"


const SecondPage = () => (
  <Layout>
    <SEO title="Zestard Maintain" />

    <section>
	<div className="page-banner maintain">
		<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<div className="banner-content">
						<h1>WE <span>Maintain</span> WEBSITES THAT DELIVERS RESULTS</h1>
						<p>Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum is simply. </p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="banner-image">
						<img src={Bannerimage} />
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
				<span>Features</span>
				<h2>What We Can Do</h2>
			</div>
			<div className="content">
				<p>Keeping a website well maintained and attractive is important to companies big and small in order to engage and retain customers. It’s easy for businesses, 
				especially startups, to cut corners and let a few tasks slide. Website maintenance can easily become one of those things as it doesn’t always present immediate 
				issues. However, just like your health can fall apart if you go too long without a regular check up, so can the health of your website.</p>
			</div>
		</div>
	</div>
</section>
<section>
	<div className="maintain-services">
		<div className="container">
			<div className="maintain-service-wrap odd">
				<div className="row">
					<div className="col-md-6 maintain-service-content">
						<div className="ser-contain">
							<h2 className="service-title">Wordpress Maintenance Services</h2>
							<p className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
							1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
							<a href="#" className="service-link">Get Started</a>
						</div>
					</div>
					<div className="col-md-6 maintain-service-image">
						<div className="ser-image">
							<img src={Wordpressmaintenance} />
						</div>
					</div>
				</div>
			</div>
			<div className="maintain-service-wrap even">
				<div className="row">
				<div className="col-md-6 maintain-service-image">
						<div className="ser-image">
							<img src={Wordpressmaintenance} />
						</div>
					</div>
					<div className="col-md-6 maintain-service-content">
						<div className="ser-contain">
							<h2 className="service-title">Magento Maintenance Services</h2>
							<p className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
							1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
							<a href="#" className="service-link">Get Started</a>
						</div>
					</div>
				</div>
			</div>
			<div className="maintain-service-wrap odd">
				<div className="row">
					<div className="col-md-6 maintain-service-content">
						<div className="ser-contain">
							<h2 className="service-title">Shopify Maintenance Services</h2>
							<p className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
							1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
							<a href="#" className="service-link">Get Started</a>
						</div>
					</div>
					<div className="col-md-6 maintain-service-image">
						<div className="ser-image">
							<img src={Wordpressmaintenance} />
						</div>
					</div>
				</div>
			</div>
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
          <div className="creadi_wrap shopify">
            <img src={Shopify} />
          </div>
          <div className="creadi_wrap magento">
            <img src={Magento} />
          </div>
          <div className="creadi_wrap contributor">
            <img src={Contributor} />
          </div>
          <div className="creadi_wrap aurthorized">
            <img src={Aurthorized} />
          </div>
          <div className="creadi_wrap wp-engin">
            <img src={Wpengin} />
          </div>
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
					<div className="col-md-6">
						<div className="portfolio-wrap">
							<div className="portfolio-image">
								<img src={Portfolioone} />
							</div>
							<div className="portfolio-content">
								<span className="sub-title">Web Platform</span>
								<h2 className="portfolio-title">JadeBlue Fashion</h2>
								<p>JadeBlue is India's Premier Fashion Store for Men.</p>
								<a href="#" className="portfolio-link">Read more</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="portfolio-wrap">
							<div className="portfolio-image">
								<img src={Portfoliotwo} />
							</div>
							<div className="portfolio-content">
								<span className="sub-title">Web Platform</span>
								<h2 className="portfolio-title">Purvidoshi</h2>
								<p>Purvi Doshi, an international designer, started her line back in 1992 with a passion for fashion.</p>
								<a href="#" className="portfolio-link">Read more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section>
  <div className="footer-contactus text-center">
    <div className="container">
      <div className="footer-contactus-inner">
      <div className="contcta-image">
        <img src={Mascot} />
      </div>
      <div className="content">
        <h2>Tell us about your project</h2>
        <p>Do you have a project you think we will love?<br/> Why not get started and complete our short project enquiry form</p>
        <a className="start-pro-btn" href="#">Start Your Project</a>
      </div>
      </div>
    </div>
  </div>
</section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
