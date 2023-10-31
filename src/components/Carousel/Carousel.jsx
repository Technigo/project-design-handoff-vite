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
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        swipeToSlide: true,
        focusOnSelect: true
    };

    return (
        <Slider {...settings}>
             <div className="icon-text">
            <img src={SVG1} alt="quotation on yellow background"/>
            <p>I get to play with grandma<br></br> - Nestor 7 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG7} alt="quotation on purple background"/>
            <p>I feel like a child again<br></br> - Martha 68 years </p>
        </div>
        <div className="icon-text">
            <img src={SVG2} alt="quotation on green background"/>
            <p>It is social and it<br></br>improves the balance<br></br>and you get better at <br></br>falling without hurting<br></br> yourself <br></br>- Sven 72 years</p>
        </div>
        <div className="icon-text">
            <img src={SVG3} alt="quotation on yellow background"/>
            <p>Getting the kids from <br></br>school and daycare are<br></br>now an adventure and<br></br> exercise for all of us,<br></br>not a stressful<br></br> moment.<br></br>- David 35 years<br></br>(Allans dad)</p>
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
    );
}
