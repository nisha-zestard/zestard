import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bannerimage from "../assets/images/Top_Banner.png"
import Techicon from "../assets/images/Magento.png"
import Credentialsimage from "../assets/images/credientials-bg.png"
import Zectopus from "../assets/images/zectopus.png"
import Shopify from "../assets/images/shopify-experts.png"
import Magento from "../assets/images/magento-certification-logo.png"
import Contributor from "../assets/images/Contributor-Technology_Partner-stacked.png"
import Aurthorized from "../assets/images/authorized.png"
import Wpengin from "../assets/images/wpe_social.png"
import Mascot from "../assets/images/Mascot.png"
import Portfolioone from "../assets/images/portfolio-01.jpg"
import Portfoliotwo from "../assets/images/portfolio-02.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <section>
	<div className="page-banner make">
		<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<div className="banner-content">
						<h1>WE <span>Make</span> WEBSITES THAT DELIVERS RESULTS</h1>
						<p>Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum is simply. </p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="banner-image">
						<img src={Bannerimage}  alt=""/>
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
							<span>About</span>
							<h2>Our Services</h2>
						</div>
					</div>
					<div className="col-lg-9 right-wrap">
						<div className="content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tortor sapien. Fusce sagittis hendrerit odio, vel condimentum purus feugiat quis. Nunc hendrerit urna vitae nunc aliquam, id tempus orci interdum. Nullam convallis tincidunt quam. Duis eget vulputate tortor, eget.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="services-list"> 
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="card service-wrap">
							<div className="service-icon">
								
							</div>
							<div className="card-body">
								<h2 className="s-title">Ecommerce Store Design & Development</h2>
								<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur </p>
								<a href="#" className="s-link">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="card service-wrap">
							<div className="service-icon">
								
							</div>
							<div className="card-body">
								<h2 className="s-title">WordPress Development</h2>
								<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur </p>
								<a href="#" className="s-link">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="card service-wrap">
							<div className="service-icon">
								
							</div>
							<div className="card-body">
								<h2 className="s-title">Responsive Web Design</h2>
								<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur </p>
								<a href="#" className="s-link">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="card service-wrap">
							<div className="service-icon">
								
							</div>
							<div className="card-body">
								<h2 className="s-title">Graphic Design</h2>
								<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur </p>
								<a href="#" className="s-link">Learn More</a>
							</div>
						</div>
					</div>
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
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                				<img src={Techicon}  alt=""/>
							</div>
							<div className="content-wrap">
								<h3>Magento</h3>
								<p>Magento - an open-source E-Commerce platform - has emerged as the most preferred choice and left other E-Commerce platforms miles behind.</p>
								<a href="#">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                				<img src={Techicon}  alt=""/>
							</div>
							<div className="content-wrap">
								<h3>Shopify</h3>
								<p>Shopify is a complete E-Commerce solution that allows you to set up an online store to sell your goods. It lets you organize your products.</p>
								<a href="#">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                				<img src={Techicon} alt=""/>
							</div>
							<div className="content-wrap">
								<h3>Angular</h3>
								<p>Quite popular for its flexibility, scalability, and MVC implementation in simplest terms, Angular JS has been one of the biggest open-source JavaScript-based frameworks in recent years. </p>
								<a href="#">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                <img src={Techicon} />
							</div>
							<div className="content-wrap">
								<h3>Wordpress</h3>
								<p>Although WordPress was originally designed to support blogging and related types of online publishing, It can be used to develop any kind of website.</p>
								<a href="#">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                <img src={Techicon} />
							</div>
							<div className="content-wrap">
								<h3>React</h3> 
								<p>ReactJS provides flexibility to update & render all the design components that are designed for each state in the application when data changes.</p>
								<a href="#">Learn More</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="technology-wrap">
							<div className="icon-wrap">
                <img src={Techicon} />
							</div>
							<div className="content-wrap">
								<h3>Laravel</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
								<a href="#">Learn More</a>
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
