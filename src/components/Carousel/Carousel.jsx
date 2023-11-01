import './Carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SVG1 from '../../assets/Vector.svg';
import SVG2 from '../../assets/Vector-2.svg';
import SVG3 from '../../assets/Vector-3.svg';
import SVG4 from '../../assets/Vector-4.svg';
import SVG5 from '../../assets/Vector-5.svg';
import SVG6 from '../../assets/Vector-6.svg';
import SVG7 from '../../assets/Vector-7.svg';

export const CarouselComponent = () => {
    const settings = {
        centerMode: true, // This enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
        infinite: true,
        centerPadding: "0px", // You might need to adjust this padding to get the desired effect.
        slidesToShow: 1, // This would show 3 slides at a time. The one in the center will be the main focused slide.
        speed: 500,
        swipeToSlide: true,
        focusOnSelect: true 
    };

    return (
        <div className='carousel-wrapper'>
        <Slider {...settings}>
            <div className="icon-text">
            <img src={SVG1} alt="quotation on yellow background"/>
            <p>I get to play with grandma<br></br> - Nestor 7 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG7} alt="quotation on purple background"/>
            <p>I feel like a child again - Martha 68 years </p>
        </div>
        <div className="icon-text">
            <img src={SVG2} alt="quotation on green background"/>
            <p>It is social and it improves the balance and you get better at falling without hurting  yourself - Sven 72 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG3} alt="quotation on yellow background"/>
            <p>Getting the kids from school and daycare are now an adventure and exercise for all of us, not a stressful moment. - David 35 years (Allans dad)</p>
        </div>
        <div className="icon-text">
            <img src={SVG6} alt="quotation on purple background"/>
            <p>I get to know my<br></br>neighbours and my neighbourhood<br></br>- Alice 75 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG5} alt="quotation on yellow background"/>
            <p>Because its fun<br></br> and makes me stronger<br></br> - Bella 35 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG4} alt="quotation on green background"/>
            <p>I get to discover my neighbourhood<br></br> in a new way - Ella 45 years</p>
    </div>
        </Slider>
     </div>
    );
}
