import { useState } from "react";
import pictures from "../../data/instagramdata.json";
import arrow from "../../../public/assets/Swipe.svg";
import "./Instagram.css"

export const InstagramCarousel = () => {


    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
    };

    return (
        <div className="insta-carousel">
            <img
                src={arrow}
                alt="Arrow button pointing left."
                className="arrow arrow-left"
                onClick={prevSlide}
            />
            {pictures.map((picture, index) => {
                return (
                <img className={slide === index ? "insta-image" : "insta-image slide-hidden"} src={picture.img} alt={picture.imgAlt} key={index} />
                )
            })}
            <img
                src={arrow}
                alt="Arrow button pointing right."
                className="arrow arrow-right"
                onClick={nextSlide}
            />
        </div>
    );
};
