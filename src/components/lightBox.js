import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Modal from 'react-bootstrap/Modal'
const breakpointColumnsObj = {
  default: 3,
  1025: 3,
  768: 2,
  500: 1
};
export default class Lightbox extends Component {
  static propTypes = {
    EventImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
      selIndex: null,
    };
  }
    componentDidMount = () => {
        window.addEventListener('keyup', this.handleKeyUp, false)
    }

    componentWillUnmount = () => {
        window.removeEventListener('keyup', this.handleKeyUp, false)
    }

    handleClick = (e, image, index) => {
        e.preventDefault()
        this.setState({ showLightbox: true, selectedImage: image, selIndex: index })
        // this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
    }

    closeModal = () => {
        this.setState({ showLightbox: false })
    }
    
    goBack = () => {
      this.setState({ selIndex: this.state.selIndex - 1 })
    }
    
    goForward = () => {
      this.setState({ selIndex: this.state.selIndex + 1 })
    }
    
    handleKeyUp = e => {
        e.preventDefault()
        const { keyCode } = e
        if (this.state.showLightbox) {
            if (keyCode === 37) {
                // Left Arrow Key
                if (this.state.selIndex > 0) {
                    this.setState({ selIndex: this.state.selIndex - 1 })
                }
            }
            if (keyCode === 39) {
            // Right Arrow Key
                if (this.state.selIndex < this.props.EventImages.length - 1) {
                    this.setState({ selIndex: this.state.selIndex + 1 })
                }
            }
            if (keyCode === 27) {
            // Escape key
            this.setState({ showLightbox: false })
            }
        }
    }
  

  render() {
    const { EventImages } = this.props;
    const { showLightbox, selIndex } = this.state;
    //console.log(EventImages);
    return (
      <Fragment>
        <div className="lightboxContainer">
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
          {EventImages.map((image, i) => (          
            <div className="grid-item" key={i}>
              <div className="culture-wrapper card">
                <div className="speaks">
                  <div className="previewButton" key={i} type="button" onClick={e => this.handleClick(e, image, i) }>
                    <img className="img-responsive" alt="coma" loading="lazy" src={image.source_url} />                                
                  </div>                              
                </div>
              </div>
            </div>
          ))}
        </Masonry>
          {/* {EventImages.map((image, i) => (
            <div className="previewButton" key={i} type="button"
              onClick={e => this.handleClick(e, image, i) }>
                  <img src={image.source_url} alt="img" />
               
            </div>
          ))} */}
        </div>
        {showLightbox && (
        <Modal show={showLightbox} onKeyUp={e => this.handleKeyDown(e)} >
        <div className="slbElement">
          <div className="slbOverlay"></div>
          <div className="slbWrapOuter">
            <div className="slbWrap">
            <button type="button" title="Close" className="slbCloseBtn " onClick={this.closeModal}>×</button>
              <div className="slbContentOuter">
                <div className="slbContent">
                  <div className="slbImageWrap">
                    {/* <Img fluid= {EventImages[selIndex].localFile.childImageSharp.fluid}/> */}
                    {EventImages !== null &&
                      <img src={EventImages[selIndex].source_url} alt="img" loading="lazy" className="slbImage"/>
                    }
                  </div>
                </div>
                
                <div className="slbArrows">
                  <button type="button" title="Previous" className="prev slbArrow"
                   onClick={this.goBack} disabled={selIndex === 0}>
                      <i className='fa fa-caret-left'></i>
                   </button>
                  <button type="button" title="Next" className="next slbArrow"
                   onClick={this.goForward} disabled={selIndex === EventImages.length - 1}>
                     <i className='fa fa-caret-right'></i>
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Modal>
        )}
      </Fragment>
    );
  }
}
