import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";

class Portfolio extends Component {

    getpcid = (el) => {
        const data = this.props.data;
        const pcategoryid = parseInt(el.target.getAttribute("data-pcid"));
        const portfoliolist = data.allWordpressWpPortfolio.edges;
        var setlid;
        for(var i=0; i< portfoliolist.length; i++) {    
            var test = portfoliolist[i].node.portfolio_category;
            const catindex = test.indexOf(pcategoryid);
            if(catindex > -1){
                console.log(portfoliolist[i].node.portfolio_category[catindex]);
                if(pcategoryid == portfoliolist[i].node.portfolio_category[catindex]){                                      
                    setlid = document.getElementsByClassName('portfoliolist')[i].style.display = 'block';
                }                
            }
            else {
                setlid = document.getElementsByClassName('portfoliolist')[i].style.display = 'none';
            }
            
        }
    }

    allpid = (el) => {
        const plist = document.getElementsByClassName('portfoliolist');
        for(var k=0; k < plist.length; k++) {
            plist[k].style.display = 'block';                
        }            
    }

    render() {
        const data = this.props.data
        const sertech = data.allWordpressPage.edges[0].node;
        const portcat = data.allWordpressWpPortfolioCategory.edges        
        return(
            <Layout>
                <SEO title={sertech.yoast_title} description={sertech.yoast_meta[0].content}/>
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
											<li><Link to="#">Home</Link></li>
											<li><Link to="#">Portfolio</Link></li>
										</ul>
									</div>
								</div>
                               
							</div>
						</div>
                        <div className="portfolio-list">
                            <div className="container">
                                <ul>
                                    <li onClick={ (e) => this.allpid(e) }>All</li>
                                    {portcat.map((node,index) => (
                                        <li data-pcid={node.node.wordpress_id} key={index} onClick={ (e) => this.getpcid(e) }>{node.node.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="portfolio-boxes">
                            <div className="all-portfolio-list">
                                {data.allWordpressWpPortfolio.edges.map((node,index) => (
                                    <div className="portfoliolist" key={index} data-id={node.node.portfolio_category} onLoad={ (e) => this.allpid(e) }>                                        
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
    allWordpressPage(filter: {wordpress_id: {eq: 85}}) {
		edges {
			node {
				yoast_title
				yoast_meta {
					content
				}
			  
			}
		}
	}
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