import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";

class Portfolio extends Component {

    getpcid = (el) => {
        const data = this.props.data;
        const pcategoryid = parseInt(el.target.getAttribute("data-pcid"));
        const portfoliolist = data.allWpCptuiPortfolio.edges;
        var setlid;
        for(var i=0; i< portfoliolist.length; i++) {    
            const catindex = portfoliolist[i].node.cptuiPortfoliosCat.nodes[0].databaseId;
            //const catindex = test.indexOf(pcategoryid);
            if(pcategoryid == catindex){                                      
                setlid = document.getElementsByClassName('portfoliolist')[i].style.display = 'block';
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
        const data = this.props.data;
        const seodata = data.allWpPage.edges[0].node.seo;
        const portfoliolist = data.allWpCptuiPortfolio.edges;
        const portcat = data.allWpCptuiPortfolioCat.edges ;
        //console.log(portfoliolist);
             
        return(
            <Layout>
                <SEO title={seodata.title} description={seodata.metaDesc}/>
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
                                        <li data-pcid={node.node.databaseId} key={index} onClick={ (e) => this.getpcid(e) }>{node.node.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="portfolio-boxes">
                            <div className="all-portfolio-list">
                                {portfoliolist.map((node,index) => (
                                    <div className="portfoliolist" key={index} 
                                     data-id={node.node.cptuiPortfoliosCat.nodes[0].databaseId} onLoad={ (e) => this.allpid(e) }
                                    >                                        
                                        <div className="project">
                                            {node.node.featuredImage.node !== null && 
                                                <img src={node.node.featuredImage.node.sourceUrl} alt="Portfolio featured" />
                                            }
                                            <div className="project-detail">
                                                <h5 className="project-title">{node.node.title}</h5>
                                                <p className="category">{node.node.cptuiPortfoliosCat.nodes[0].name}</p>
                                                
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
    allWpPage(filter: {databaseId: {eq: 85}}) {
		edges {
			node {
				seo {
                    title
                    metaDesc
                }
			}
		}
	}
    allWpCptuiPortfolioCat {
        edges {
          node {
            name
            databaseId
          }
        }
      }
    allWpCptuiPortfolio {
        edges {
          node {
            title
            cptuiPortfoliosCat {
                nodes {
                  name
                  databaseId
                }
              }
            featuredImage {
              node {
                sourceUrl
              }
            }
            
          }
        }
      }
}
`