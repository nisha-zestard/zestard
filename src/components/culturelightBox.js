import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Modal from 'react-bootstrap/Modal'
// import ImageGallery from 'react-image-gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';

const breakpointColumnsObj = {
  default: 3,
  1025: 3,
  768: 2,
  500: 1
};
export default class CultureLightbox extends Component {
  static propTypes = {
    EventImages: PropTypes.array.isRequired, 
  }

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
      selIndex: null,
      photoIndex: 0,
      isOpen: false,
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
    }
    
    handleImageClick(i){
      this.setState({ photoIndex: i, isOpen: true })
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
          if (this.state.selIndex > 0) {
              this.setState({ selIndex: this.state.selIndex - 1 })
          }
        }
        if (keyCode === 39) {
          if (this.state.selIndex < this.props.EventImages.length - 1) {
              this.setState({ selIndex: this.state.selIndex + 1 })
          }
        }
        if (keyCode === 27) {
          this.setState({ showLightbox: false })
        }
      }
    }

  render() {
    const { EventImages } = this.props;
    const { photoIndex, isOpen, showLightbox, selIndex } = this.state;
    
    const images = [];  
    
    
    
    return (      
      <Fragment>
        <div className="lightboxContainer">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
            {EventImages.map((image, i) => (          
              <div className="grid-item" key={i}>
                <div className="culture-wrapper card">
                  <div className="speaks">                    
                    <div className="previewButton" key={i} type="button" onClick={e => this.handleClick(e, image, i) }>
                    <img className="img-responsive" alt="Culture" loading="lazy" src={image.sourceUrl} onClick={e => this.handleImageClick(i) } />
                      {/* {image.sourceUrl.match(/\.(jpeg|jpg|png|gif)$/) != null && 
                        <img className="img-responsive" alt="Culture" loading="lazy" src={image.sourceUrl} onClick={e => this.handleImageClick(i) } />                           
                      } */}
                      {/* {image.sourceUrl.match(/\.(mp4|mov|mpeg|webm)$/) != null && 
                        <ReactPlayer
                          url={image.sourceUrl}
                          volume='1'
                          muted
                          width='100%'
                          playing={true}
                        />
                        } */}
                      
                    </div>                              
                  </div>
                </div>
              </div>
            ))}
          </Masonry>

          {/* {(isOpen && EventImages.length > 0) && (
          <Lightbox
            mainSrc={EventImages[photoIndex].source_url}
            nextSrc={EventImages[(photoIndex + 1) % EventImages.length].source_url}
            prevSrc={EventImages[(photoIndex + EventImages.length - 1) % EventImages.length].source_url}            
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + EventImages.length - 1) % EventImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % EventImages.length,
              })
            }
          />
        )} */}
        {showLightbox && (
        <Modal show={showLightbox} onKeyUp={e => this.handleKeyDown(e)} >
        <div className="slbElement">
          <div className="slbOverlay"></div>
          <div className="slbWrapOuter">
            <div className="slbWrap">
              <div className="slbContentOuter">
                <div className="slbContent">
                  <div className="slbImageWrap">                    
                  <Carousel>
                    {EventImages.map((image, i) => (                     
                      <div>
                        <img src={image.sourceUrl} alt="img" loading="lazy" className="slbImage"/>
                        {/* {image.source_url.match(/\.(jpeg|jpg|png|gif)$/) != null && 
                        <img src={image.source_url} alt="img" loading="lazy" className="slbImage"/>
                        } 
                        {image.source_url.match(/\.(mp4|mov|mpeg|webm)$/) != null && 
                        <ReactPlayer
                          url={image.source_url}
                          volume='1'
                          muted
                          width='100%'
                          playing={true}
                        />
                        } */}
                      {/* <img src={image.source_url} alt="img" loading="lazy" className="slbImage"/> */}
                      </div>                    
                    ))}
                    </Carousel>
                  </div>
                </div>
                <button type="button" title="Close" className="slbCloseBtn "
                  onClick={this.closeModal}>×</button>
                <div className="slbArrows">
                  <button type="button" title="Previous" className="prev slbArrow"
                   onClick={this.goBack} disabled={selIndex === 0}>
                      <i className='fas fa-caret-left'></i>
                   </button>
                  <button type="button" title="Next" className="next slbArrow"
                   onClick={this.goForward} disabled={selIndex === EventImages.length - 1}>
                     <i className='fas fa-caret-right'></i>
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Modal>
        )}
        </div>  
      </Fragment>
    );
  }
}
