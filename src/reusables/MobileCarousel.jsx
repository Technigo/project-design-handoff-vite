/* eslint-disable react/prop-types */
//import styled
import styled from "styled-components";

//import reusables
import { MembershipCard } from "./MembershipCard";

//import slick for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//styles
const MobileCarouselWrapper = styled.div`
  display: block;

  @media all and (min-width: 744px) {
    display: none;
  }
`;

//components
export const MobileCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <MobileCarouselWrapper>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <MembershipCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            listItems={card.listItems}
            price={card.price}
          />
        ))}
      </Slider>
    </MobileCarouselWrapper>
  );
};
