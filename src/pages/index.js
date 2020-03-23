import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Bannerimage from "../assets/images/banner.png"
import Portfolioone from "../assets/images/portfolio-01.jpg"
import Portfoliotwo from "../assets/images/portfolio-02.jpg"

const Home = () => {
  //const data= this.
  return(
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* banner-section  */}
    <section>
        <div className="page-banner home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                       <div className="banner-content">
                       <h1>
                            We Bring Your <br />Brick-and-Mortar Business to Digital Commerce
                        </h1>
                        <p>We deliver high performing shopping experience and marketing solutions to grow your online business.</p>
                       </div>
                    </div>
                    <div className="col-md-5 text-right">
                        <div className="banner-image">
                            <img src={Bannerimage} alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Services-section */}
    <section>
        <div className="our-service">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-6">
                        <div className="title">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <p>As a strategic partner, we create a working product with thoughtful and large-scale architecture. We launch support and development.</p>
                    </div>
                </div>
                <div className="services-inner">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="assets/images/make.png" alt="service-img" />
                            <div className="card-body">
                                <h5 className="card-title">Make</h5>
                                <p className="card-text">We have a knack of turning great ideas into meaningful User Interactions with our design-led engineering practices.</p>
                                <a className="l-more" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="assets/images/market.png" alt="service-img" />
                            <div className="card-body">
                                <h5 className="card-title">Market</h5>
                                <p className="card-text">Whether creating a web presence for your company, an information hub for your business.</p>
                                <a className="l-more" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="assets/images/maintain.png" alt="service-img" />
                            <div className="card-body">
                                <h5 className="card-title">Maintain</h5>
                                <p className="card-text">We have a knack of turning great ideas into meaningful User Interactions with our design-led engineering practices.</p>
                                <a className="l-more" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Portfolio-section */}
    <section>
	<div className="recent-work portfolio">
		<div className="container">
			<div className="title text-left">
				<h2>Our Portfolio</h2>
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
    {/* Clients-section */}
    <section>
        <div className="clients-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Our Clients</h2>
                </div>
                <div className="clients-logos">
                    <ul>
                        <li>
                            <a href="#"><img src="assets/images/boheco-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/farah-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/houzwala-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/customsash-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/jadeblue-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/kodak-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/lg-logo.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/planet.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/pumpkin.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/purvi-doshi.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/printogenic.png" alt="c-logo-img" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="assets/images/Shankus-Waterpark.png" alt="c-logo-img" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* expertise-section */}
    <section>
        <div className="expertise-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="title">
                            <h2>Our Expertise</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            <a className="btn r-more" href="#">read more</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="experience-wrap">
                            <ul>
                                <li>
                                    <a href="#"><img src="assets/images/magento.png" alt="f-logo-img" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="assets/images/wordpress.png" alt="f-logo-img" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="assets/images/angular.png" alt="f-logo-img" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="assets/images/shopify.png" alt="f-logo-img" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="assets/images/react.png" alt="f-logo-img" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="assets/images/d-marketing.png" alt="f-logo-img" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="counter-section">
            <div className="container">
                <div className="counter-wraper">
                    <ul className="row">
                        <li className="box">
                            <h2>9<span>+</span></h2>
                            <p>Years of Experience</p>
                        </li>
                        <li className="box">
                            <h2>350<span>+</span></h2>
                            <p>E-Commerce Stores</p>
                        </li>
                        <li className="box">
                            <h2>800<span>+</span></h2>
                            <p>Projects delivered</p>
                        </li>
                        <li className="box">
                            <h2>30<span>+</span></h2>
                            <p>Specialized Solutions</p>
                        </li>
                        <li className="box">
                            <h2>40<span>+</span></h2>
                            <p>Employees</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* Testimonials section */}
    <section>
        <div className="testimonials-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Testimonials</h2>
                </div>


                <div className="container">
                    <div id="carouselTestimonial" className="carousel carousel-testimonial slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="testimonial-img">
                                            <img className="d-block w-100" src="assets/images/db55bf46b7607faa44f18f5260daa827.png" alt="First slide" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5 className="title">Daniel Lock</h5>
                                        <p> We experienced extreme difficulties with my hosting provider, therfore we had quite some rework and delay on the project. The Zestad Technologies's team is extremely responsive and have a high level of technical
                                            mastery! I can highy recommend them for similar projects like ours! Value for money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="testimonial-img">
                                            <img className="d-block w-100" src="assets/images/db55bf46b7607faa44f18f5260daa827.png" alt="Second slide" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5 className="title">Daniel Lock</h5>
                                        <p> We experienced extreme difficulties with my hosting provider, therfore we had quite some rework and delay on the project. The Zestad Technologies's team is extremely responsive and have a high level of technical
                                            mastery! I can highy recommend them for similar projects like ours! Value for money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="testimonial-img">
                                            <img className="d-block w-100" src="assets/images/db55bf46b7607faa44f18f5260daa827.png" alt="Third slide" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5 className="title">Daniel Lock</h5>
                                        <p> We experienced extreme difficulties with my hosting provider, therfore we had quite some rework and delay on the project. The Zestad Technologies's team is extremely responsive and have a high level of technical
                                            mastery! I can highy recommend them for similar projects like ours! Value for money</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next-pre">
                            <a className="button prev" href="#carouselTestimonial" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>

                            </a>
                            <a className="button next" href="#carouselTestimonial" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
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
                    <li>
                        <div className="box">
                            <img src="assets/images/amasty-logo-800.png" alt="cre-img" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img src="assets/images/Contributor-Technology_Partner-stacked.png" alt="cre-img" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img src="assets/images/authorized.png" alt="cre-img" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img src="assets/images/magento-certification-logo.png" alt="cre-img" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img src="assets/images/select_extensions_partner_large.png" alt="cre-img" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <img src="assets/images/Layer 66.png" alt="cre-img" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* News & Blog section */}
    <section>
        <div className="news-Blog-section">
            <div className="container">
                <div className="title text-center">
                    <h2>Read Our Latest News & Blog</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <img src="assets/images/WordCamp-Ahmedabad-’19-A-Rousing-Success-01.png" alt="top-img" />
                            <ul>
                                <li><span><i className="fa fa-user" aria-hidden="true"></i></span>Ritesh Vatwani</li>
                                <li><span><i className="fa fa-calendar" aria-hidden="true"></i></span>December 31, 2019</li>
                            </ul>
                            <p>WordCamp Ahmedabad was a people-sponsored event in the city geared to be about WordPress only. WCAhmedabad – the voluntary organized local event tech conference brought Ahmedabad’s vibrant WordPress community all at one place
                                – students, developers, experts, entrepreneurs, bloggers, and digital marketers – the event benefitting every WordPress enthusiast. From Left to Right – Boni,…</p>
                            <div className="button">
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <img src="assets/images/wordpress5.3.png" alt="top-img" />
                            <ul>
                                <li><span><i className="fa fa-user" aria-hidden="true"></i></span>Ritesh Vatwani</li>
                                <li><span><i className="fa fa-calendar" aria-hidden="true"></i></span>December 25, 2019</li>
                            </ul>
                            <p>Before the official release date of the WordPress, core WordPress Executive Director, Josepha Haden on 8th August 2019 summarized the updates and improvements one could expect in WordPress 5.3. She revealed that the focus of
                                this version of WordPress was to polish current interactions and increase the user-friendliness of user interfaces. Have a look at…</p>
                            <div className="button">
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Layout>
)}

export default Home

export const query = graphql`
{
  wordpressAcfPages(wordpress_id: {eq: 2}) {
    acf {
      header_type
      header_mascot {
        source_url
      }
      home_mascot_class
      header_section_title
      header_page_title
      header_sub_text
    }
  }
}
`