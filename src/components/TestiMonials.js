import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonials = (props) => {

    const slides = useRef(null);

      const next = () => {
        slides.current.slickNext();
      }
      const previous = () => {
        slides.current.slickPrev();
      }
       
    const testimonialsSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <div className="testimonials-section">
                <div className="container">
                    <div className="title text-center">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="container">
                        <div id="carouselTestimonial" className="carousel carousel-testimonial slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <Slider ref={slides} {...testimonialsSettings}>
                                    {props.testimonial && props.testimonial.map((node, index) => (
                                        <div className={index === 0 ? 'carousel-item' : 'carousel-item active'} key={index}>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="testimonial-img">                                                        
                                                        {node.node.featuredImage !== null && 
                                                            <img className="d-block w-100" src={node.node.featuredImage.node.sourceUrl} alt={node.node.title} />
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <h5 className="title">{node.node.title}</h5>
                                                    {node.node.content !== null &&
                                                        <div dangerouslySetInnerHTML={{ __html: node.node.content }} />
                                                    }
                                                    <div className="next-pre">
                                                        <button className="button" onClick={previous}>
                                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </button>
                                                        <button className="button" onClick={next}>
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Testimonials;