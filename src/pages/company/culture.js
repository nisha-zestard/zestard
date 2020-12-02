import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header";
import PageHeader from './../../components/page-header';
import { removePre } from './../../util/common'
import SEO from "../../components/seo";

class Culture extends Component {
  
    render() {
      const data = this.props.data
      const seotd = data.wordpressPage
      const acfData = data.wordpressPage.acf;
      const culturelist = data.allWordpressWpCulture.edges;
      const culcat = data.allWordpressWpCultureCat.edges;

      const getpcid = (el) => { 
        const pcategoryid = el.target.getAttribute("culcat-id"); 
        var setlid;
        for(var i=0; i< culturelist.length; i++) {
            if(pcategoryid == culturelist[i].node.culture_cat[0]){
                setlid = document.getElementsByClassName('culture-list')[i].style.display = 'block';
            }
            else {
                setlid = document.getElementsByClassName('culture-list')[i].style.display = 'none';
            }
        }
    }
    function allpid (){
      const pcategoryid = "237"; 
      setTimeout(function(){ 
        const plist =document.getElementsByClassName('culture-list');
      
      for(var k=0; k < plist.length; k++) {
          if(pcategoryid == culturelist[k].node.culture_cat[0]){ 
        }
        else{
          plist[k].style.display = 'none'; 
        }
    }              
      }, 1000);
      
  }
      return (
        <Layout>
          <SEO title={seotd.yoast_title} description={seotd.yoast_meta[0].content}/>
          <Header headernavclass="lightheader" />
            <div id="page" className="">
                <div id="content" className="site-content">
                    {/* page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {/* events */}
                    <div className="container" onLoad={allpid()}>
                      <div className="row">
                        <div className="col-sm-12 year-list">
                          <ul>
                            {culcat.map((node,index) => (
                              <li culcat-id={node.node.wordpress_id} key={index} onClick={ (e) => getpcid(e) }>{node.node.name}</li>                          
                            ))}
                          </ul>                        
                        </div>
                      {culturelist.map(({ node }) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 culture-box-wrap culture-list" key={node.id} data-id={node.culture_cat} >
                          <div className="events-wrapper card shadow-sm rounded">
                          {node.featured_media !== null && node.featured_media.source_url !== null &&
                            <div className="gallery-image" 
                            style={{backgroundImage:`url(${node.featured_media.source_url})`}}>
                              <div className="view-more">
                                <Link to={`/${removePre(node.link)}`}>View All</Link>
                              </div>
                            </div>
                          }
                            <div className="card-body event-title">
                              <h3>{node.title}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>
                </div>
            </div>
        </Layout>
        )
  }

}
export default Culture

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 169}) {
    title
    yoast_title
    yoast_meta {
      content
    }
    acf {
      header_page_title
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
    }
  }  
  allWordpressWpCulture(sort: {order: DESC, fields: date}) {
    edges {
      node {
        acf {
          el_gallery {
            mime_type            
          }
        }
        id
        title
        slug
        link
        culture_cat
        date(formatString: "YYYY")
        featured_media {
          source_url
          wordpress_id
        }
      }
    }
  }
  allWordpressWpCultureCat {
    edges {
      node {
        slug
        name
        wordpress_id
      }
    }
  }
  
}
`