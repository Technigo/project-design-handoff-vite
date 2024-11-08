import Slider from "react-slick";
import { Layout } from "../ui/Layout";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import "./ImageCarousel.css";

import styled from "styled-components";
import atIcon from "/assets/social-media-images/atSymbol.svg";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5.1,
  slidesToScroll: 1,
  swipe: true,
  swipeToSlide: true,
  draggable: true,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  //accessibility: true, // Enable keyboard and gesture navigation

  // Add responsive settings
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.25,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4.3,
      },
    },
  ],
};

const MediaText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 14.375rem;
  height: 5.1875rem;
  gap: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AtIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const IconText = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.font};
`;

export const ImageCarousel = () => {
  const images = [
    "/assets/dog-images/carousel-images/carousel-img-one.webp",
    "/assets/dog-images/carousel-images/carousel-img-two.webp",
    "/assets/dog-images/carousel-images/carousel-img-three.webp",
    "/assets/dog-images/carousel-images/carousel-img-four.webp",
    "/assets/dog-images/carousel-images/carousel-img-five.webp",
    "/assets/dog-images/carousel-images/carousel-img-six.webp",
    "/assets/dog-images/carousel-images/carousel-img-seven.webp",
  ];

  return (
    <Layout $top="35%" $left="86%" $rotation="20deg">
      <MediaText>
        <SocialMediaIcons sectionType="contact" />
        <TextWrapper>
          <AtIcon src={atIcon} alt="@" />
          <IconText>THORONDORSKENNEL</IconText>
        </TextWrapper>
      </MediaText>

      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="carousel-image" key={index}>
              <img src={image} alt={`Dog ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
};
