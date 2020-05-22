import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Modal from 'react-bootstrap/Modal'
// import ReactFancyBox from 'react-fancybox'
// import 'react-fancybox/lib/fancybox.css'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const breakpointColumnsObj = {
  default: 3,
  1025: 3,
  768: 2,
  500: 1
};
export default class CultureLightbox extends Component {
  static propTypes = {
    EventImages: PropTypes.array.isRequired, // eslint-disable-line
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
    const { photoIndex, isOpen } = this.state;
    const { showLightbox, selIndex } = this.state;
    
    // function imgculture(){
    //   const cultimglist = [];
    //   for(var i=0; i< EventImages.length; i++) {
    //      cultimglist.push(EventImages[i].source_url);
    //   }
    //   return cultimglist;   
    // }
    
    
    return (
      
      <Fragment>
        <div className="lightboxContainer">
          <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
            {EventImages.map((image, i) => (          
              <div className="grid-item" key={i}>
                <div className="culture-wrapper card">
                  <div className="speaks">                    
                    <div className="previewButton" key={i} type="button" onClick={e => this.handleClick(e, image, i) }>
                      <img className="img-responsive" alt="Culture" loading="lazy" src={image.source_url} onClick={e => this.handleImageClick(i) } />                           
                    </div>                              
                  </div>
                </div>
              </div>
            ))}
          </Masonry>

          {(isOpen && EventImages.length > 0) && (
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
        )}
        </div>       
        
      </Fragment>
    );
  }
}
