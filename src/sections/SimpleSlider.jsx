import Slider from "react-slick";

import testimonial1 from "/testimonials/testimonial-1.png"
import testimonial2 from "/testimonials/Testimonial2.png"
import testimonial3 from "/testimonials/Testimonial3.png"
import testimonial4 from "/testimonials/Testimonial4.png"

import "./testimonials.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = ({ testimonialArray }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    
    return (
      <Slider {...settings}>
        <div>
          <h3>1 <img className="testimonial-pic" src={testimonial1} /></h3>
        </div>
        <div>
          <h3>2 <img className="testimonial-pic" src={testimonial2} /></h3>
        </div>
        <div>
          <h3>3 <img className="testimonial-pic" src={testimonial3} /></h3>
        </div>
        <div>
          <h3>4 <img className="testimonial-pic" src={testimonial4} /></h3>
        </div>
      </Slider>
    );
  }