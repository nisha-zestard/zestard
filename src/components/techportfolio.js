// Portfolio part in service technology portfolio section

import React from "react"
// import Footer from "./footer";
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"

function renderItems(file) {
  return (
    <div className="row">
      {file.map((node, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
              <h3 className="project-title">{node.node.title}</h3>
                  <img src={node.node.featured_media.source_url} alt="img" loading="lazy" />
              
          </div>
      ))}
    </div>
  );
}
  

function TechPortfolio(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWpCptuiPortfolio {
            edges {
              node {
                title
                databaseId
                slug
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={({ allWpCptuiPortfolio }) =>
      renderItems(allWpCptuiPortfolio.edges.filter(
          node => (node.node.databaseId === props.item1 || node.node.databaseId === props.item2)
          ))
      }
    />
  );
}

  export default React.memo(TechPortfolio);


