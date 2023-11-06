import { useState } from "react";
import pictures from "../../data/instagramdata.json";
import arrow from "../../../public/assets/Swipe.svg";
import "./Instagram.css";

export const InstagramCarousel = () => {
    return (
        <div className="insta-carousel">
            {pictures.map((picture, index) => {
                return (
                    <img
                        className="insta-image"
                        src={picture.img}
                        alt={picture.imgAlt}
                        key={index}
                    />
                );
            })}
        </div>
    );
};
