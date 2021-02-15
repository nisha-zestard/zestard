import React, { Component } from "react"
import { graphql } from "gatsby"
import PageHeader from './../components/page-header';
import Header from "./../components/header";
import Technology from './../components/technology'
import ServiceTech from './../components/serviceTech'
import SEO from './../components/seo'

class ServiceTemplate extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.allWpPage.edges[0].node.acf;
      const sertech = data.allWpPage.edges[0].node;
      return (
        <>
        <SEO title="Services"/>
        <Header headernavclass="lightheader" />
            <div id="page" className="site">
                <div id="content" className="site-content">
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {acfData.sl_content_module_page !== null &&
                    <div className="technology-page">
                    {acfData.sl_content_module_page.map(( node, index ) => (
                       <Technology 
                        serviceImage = {node.sl_service_image}
                        serviceName = {node.sl_service_name}
                        ServiceSubText = {node.sl_service_sub_text}
                        serviceTitle = {node.title}
                        serLink = {node.sl_service_page_link}
                        key = {index}
                       />
                    ))}
                    </div>}
                    {sertech !== null &&
                      <ServiceTech 
                        sections = {sertech}
                      />
                    }
                </div>
            </div>
        </>
        )
  }

}
export default ServiceTemplate

export const query = graphql`
query($id: Int!) {
  allWpPage(filter: {wordpress_id: {eq: $id}}) {
    edges {
      node {
        slug
        title
        wordpress_id
        acf {
          header_page_title
          header_sub_text
          header_section_title
          header_mascot {
            source_url
          }
          
          sl_content_module_page {
            sl_service_name
            sl_service_sub_text
            sl_service_image {
              source_url
              title
              wordpress_id
            }
          }
        }
        childWordPressAcfTechAboutTechnology {
          tech_about_heading
          tech_about_content
          tech_about_right_content
        }
        childWordPressAcfTechServices {
          tech_services_heading
          tech_sub_heading
          tech_services_list {
            tech_service_name
            tech_service_description
          }
        }
        childWordPressAcfTechKeyBenefits {
          tech_keyb_heading
          tech_key_features_repeater {
            tech_key_features
          }
        }
      }
    }
  }
}
`