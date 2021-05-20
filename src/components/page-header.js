import React, { Component } from "react"

class PageHeader extends Component {
    
    render() {
        const {
            headerMascot,
            headerSubText,
            headerSectionTitle,
            headerPageTitle,
        } = this.props;
        
        return (
            <section>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 vector">
                                {headerMascot !== null &&
                                    <img src={headerMascot} loading="lazy" alt=""/>
                                }
                                {/* {headerMascot !== null && headerMascot.localFile !== null && headerMascot.localFile.childImageSharp !== null &&
                                    <Img fixed={headerMascot.localFile.childImageSharp.fixed} />
                                } */}
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                <div className="page-detail">
                                    <h5>{headerSectionTitle}</h5>
                                    <h1 className="title">{headerPageTitle}</h1>
                                    <h4 className="sub-title" dangerouslySetInnerHTML={{__html: headerSubText}}></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default PageHeader