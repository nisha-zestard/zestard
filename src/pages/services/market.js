import React from "react"
import { Link } from "gatsby"

import Layout from "./../../components/layout"
import SEO from "./../../components/seo"

import Bannerimage from "./../../assets/images/Top-Banner.png"
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
import Serviceicon from "./../../assets/images/m-service-icon.png"
import Serviceiconhover from "./../../assets/images/m-service-icon-hover.png"
import Earnedlink from "./../../assets/images/Search-Engin-Land.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <section>
	<div className="page-banner market">
		<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex align-items-center">
					<div className="banner-content">
						<h1>WE <span>Market</span> WEBSITES THAT DELIVERS RESULTS</h1>
						<p>Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum is simply. </p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="banner-image">
						<img src={Bannerimage} alt="Market banner"/>
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
					<h2>What We Offer</h2>
				</div>
				<div className="text">
					<p>Our website developers provide expert web application development and web design services to our clients. Appnovation offers a variety of website design and 
					development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using 
					the latest and proven web technologies. With up to 85% of consumers visiting company's or service provider's website before making a purchase, 
					more and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, 
					especially in an increasingly competitive market. </p>
				</div>
			</div>
			<div className="market-services-list">
				<div className="row">
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<h2 className="service-main-title">Our Services</h2>
							<p>A red flare silhouetted the jagged edge
							of a wing.A red flare silhouetted the
							jagged edge of a wing.</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<div className="m-ser-icon">
								<img src={Serviceicon} className="ser-icon" alt=""/>
								<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
							</div>
							<h2 class="m-ser-title">Pay Per Click</h2>
							<p className="m-ser-text">A red flare silhouetted the
							jagged edge of a wing.A red flare
							silhouetted the jagged edge.</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<div className="m-ser-icon">
								<img src={Serviceicon} className="ser-icon" alt=""/>
								<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
							</div>
							<h2 class="m-ser-title">Pay Per Click</h2>
							<p className="m-ser-text">A red flare silhouetted the
							jagged edge of a wing.A red flare
							silhouetted the jagged edge.</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<div className="m-ser-icon">
								<img src={Serviceicon} className="ser-icon" alt=""/>
								<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
							</div>
							<h2 class="m-ser-title">Pay Per Click</h2>
							<p className="m-ser-text">A red flare silhouetted the
							jagged edge of a wing.A red flare
							silhouetted the jagged edge.</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<div className="m-ser-icon">
								<img src={Serviceicon} className="ser-icon" alt=""/>
								<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
							</div>
							<h2 class="m-ser-title">Pay Per Click</h2>
							<p className="m-ser-text">A red flare silhouetted the
							jagged edge of a wing.A red flare
							silhouetted the jagged edge.</p>
						</div>
					</div>
					<div className="col-md-6 col-lg-4 m-ser-wrap">
						<div className="m-ser-wrap-inner">
							<div className="m-ser-icon">
								<img src={Serviceicon} className="ser-icon" alt=""/>
								<img src={Serviceiconhover} className="ser-icon-hover" alt=""/>
							</div>
							<h2 class="m-ser-title">Pay Per Click</h2>
							<p className="m-ser-text">A red flare silhouetted the
							jagged edge of a wing.A red flare
							silhouetted the jagged edge.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section>
	<div className="links-earned">
		<div className="container">
			<div className="title text-center">
				<h2>Links We've Earned</h2>
			</div>
			<ul className="links-earned-list">
				<li>
					<div className="links-earned-wrap">
						<img src={Earnedlink} />
					</div>
				</li>
				<li>
					<div className="links-earned-wrap">
						<img src={Earnedlink} />
					</div>
				</li>
				<li>
					<div className="links-earned-wrap">
						<img src={Earnedlink} />
					</div>
				</li>
				<li>
					<div className="links-earned-wrap">
						<img src={Earnedlink} />
					</div>
				</li>
				<li>
					<div className="links-earned-wrap">
						<img src={Earnedlink} />
					</div>
				</li>
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
