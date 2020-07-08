import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import SEO from "../components/seo";

class Portfolio extends Component {
    render() {
        const data = this.props.data
        const portcat = data.allWordpressWpPortfolioCategory.edges
        const portfoliolist = data.allWordpressWpPortfolio.edges
        //console.log(portfoliolist[0].node.title);
        const getpcid = (el) => { 
            const pcategoryid = el.target.getAttribute("data-pcid");            
            console.log('Category id ----->'+pcategoryid);
            for(var i=0; i< portfoliolist.length; i++) {                
                if(pcategoryid==portfoliolist[i].node.portfolio_category[0]){
                    var titlelist = portfoliolist[i].node.title
                    var setlid = document.getElementsByClassName('portfoliolist')[i].style.display = 'block';
                    // portlist.classList.toggle('selectedportfolio');
                     //console.log(setlid)
                }
                else {
                    var setlid = document.getElementsByClassName('portfoliolist')[i].style.display = 'none';
                }
            }
        }
        const allpid = (el) => {
           // console.log('hi...');
            const plist = document.getElementsByClassName('portfoliolist');
            
            //console.log(plist);
            for(var k=0; k < plist.length; k++) {
                plist[k].style.display = 'block';                
            }
            
        }
        return(
            <Layout>
                <SEO title="Portfolio" />
                <Header headernavclass="lightheader" />
                <div>
                    <section>
                        <div className="sub-services-breadcums">
							<div className="container">
								<div className="breadcums-inner">
									<div className="page-title">
										<h1>Portfolio</h1>
									</div>
									<div className="breadcums-wrap">
										<ul className="d-flex justify-content-center m-0 p-0">
											<li><a href="#">Home</a></li>
											<li><a href="#">Portfolio</a></li>
										</ul>
									</div>
								</div>
                               
							</div>
						</div>
                        <div className="portfolio-list">
                            <div className="container">
                                <ul>
                                    <li onClick={ (e) => allpid(e) }>All</li>
                                    {portcat.map((node,index) => (
                                        <li data-pcid={node.node.wordpress_id} key={index} onClick={ (e) => getpcid(e) }>{node.node.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="portfolio-boxes">
                            <div className="all-portfolio-list">
                                {data.allWordpressWpPortfolio.edges.map((node,index) => (
                                    <div className="portfoliolist" key={index} data-id={node.node.portfolio_category} onLoad={ (e) => allpid(e) }>                                        
                                        <div className="project">
                                            {node.node.featured_media !== null && node.node.featured_media.source_url !== null && 
                                                <img src={node.node.featured_media.source_url} alt="Portfolio featured" />
                                            }
                                            <div className="project-detail">
                                                <h5 className="project-title">{node.node.title}</h5>
                                                <p className="category">{node.node.acf.pf_category_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}                                
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Portfolio

export const query = graphql`
{
    allWordpressWpPortfolio {
        edges {
          node {
            title
            portfolio_category
            acf {
                pf_category_name
            }
            featured_media {
                source_url
            }            
          }
        }
    }
    allWordpressWpPortfolioCategory(filter: {count: {ne: 0}}) {
        edges {
          node {
            slug
            wordpress_id
            name
          }
        }
    }
}
`
