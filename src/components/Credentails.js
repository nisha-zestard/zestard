import React from "react";
import Slider from "react-slick";

const Credentails = (props) => {

     const credentailsSettings = {
        dots: true,
        infinite: false,
        speed: 1000,
        autoplay: true,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToShow,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }; 

    return (
        <section>
            <div className="credentials-section">
                <div className="container">
                    <div className="title text-center">
                        <h2>Our Credentials</h2>
                    </div>  
                    <ul>                
                        <Slider {...credentailsSettings}>
                            {props.credentials.map((node,index) => (                            
                                <li key={index}>                                
                                        {node.featuredImage.node !== null &&
                                            <div className="box">
                                            <img src={node.featuredImage.node.sourceUrl} alt="cre-img" />
                                            </div>
                                        }                           
                                </li>
                            ))} 
                        </Slider>                   
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default Credentails;