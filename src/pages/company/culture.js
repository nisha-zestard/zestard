import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header"
import PageHeader from "./../../components/page-header"
import { removePre } from "./../../util/common"
import SEO from "../../components/seo"

class Culture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
  }

  componentDidMount() {
    const data = this.props.data
    const culturelist = data.allWpCptuiCulture.edges

    const pcategoryid = data.allWpCptuiCultureCat.edges[0].node.databaseId

    const plist = document.getElementsByClassName("culture-list")
    // for (var k = 0; k < plist.length; k++) {
    //   if (pcategoryid == culturelist[k].node.cptui_culture_cats.nodes[0].name) {
    //     plist[k].style.display = 'block';
    //   } else {
    //     plist[k].style.display = "none"
    //   }
    // }
  }

  setActive = (activeIndex) => {
    this.setState({ active: activeIndex })
  }

  render() {
    const data = this.props.data;
    const seodata = data.wpPage.seo;
    const bannerdata = data.wpPage.acfHeader;
    const culturelist = data.allWpCptuiCulture.edges;
    const culcat = data.allWpCptuiCultureCat.edges;
    console.log(data);
    // const seotd = data.wpPage
    // const acfData = data.wpPage.acf
    // const culturelist = data.allWpCptuiCulture.edges
    // const culcat = data.allWpCptuiCultureCat.edges

    const getpcid = (el, index) => {
      const pcategoryid = el.target.getAttribute("culcat-id");
      this.setActive(index);
      var setlid;
      // for (var i = 0; i < culturelist.length; i++) {
      //   if (pcategoryid == culturelist[i].node.cptui_culture_cats.nodes[0].name) {
      //     setlid = document.getElementsByClassName("culture-list")[i].style.display = "block";
      //   } else {
      //     setlid = document.getElementsByClassName("culture-list")[i].style.display = "none";
      //   }
      // }
    }

    return (
      <Layout>
        <SEO title={seodata.title} description={seodata.metaDesc} />
        <Header headernavclass="lightheader" />
        <div id="page" className="">
          <div id="content" className="site-content">
            {/* page header */}
            <PageHeader
              headerMascot={bannerdata.headerMascot.sourceUrl}
              headerSubText={bannerdata.headerSubText}
              headerSectionTitle=""
              headerPageTitle={bannerdata.headerPageTitle}
            />
            {/* events */}
            <div className="container">
              <div className="row">
                <div className="col-sm-12 year-list">
                  <ul>
                    {culcat.map((node, index) => (
                      <li
                        culcat-id={node.node.databaseId}
                        key={index}
                        onClick={(e) => getpcid(e, index)}
                        className={"cat-year-list" + index == this.state.active ? "active" : ""}
                      >
                        {node.node.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {culturelist.map(({ node }) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 culture-box-wrap culture-list"
                    key={node.id}
                    data-id={node.cptui_culture_cats.nodes[0].name}
                  >
                    <div className="events-wrapper card shadow-sm rounded">
                      {node.featuredImage !== null &&
                        node.featuredImage.node.sourceUrl !== null && (
                          <div
                            className="gallery-image"
                            style={{
                              backgroundImage: `url(${node.featuredImage.node.sourceUrl})`,
                            }}
                          >
                            <div className="view-more">
                              <Link to={node.link}>
                                View All
                              </Link>
                            </div>
                          </div>
                        )}
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
    allWpCptuiCultureCat {
      edges {
        node {
          name
          databaseId
          slug
        }
      }
    }
    wpPage(databaseId: { eq: 169 }) {
      title
      seo {
        title
        metaDesc
      }
      acfHeader {
        headerPageTitle
        headerSectionTitle
        headerSubText
        homeMascotClass
        headerMascot {
          sourceUrl
        }
      }
    }
    allWpCptuiCulture(sort: {order: DESC, fields: date}) {
      edges {
        node {
          acfEventslayout {
            elGallery {
              mimeType
            }
          }
          id
          title
          link
          slug
          date(formatString: "YYYY")
          featuredImage {
            node {
              sourceUrl
            }
          }
          cptui_culture_cats {
            nodes {
              name
              databaseId
            }
          }
        }
      }
    }
  }
`
