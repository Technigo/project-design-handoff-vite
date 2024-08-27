import Slider from "react-slick";
import styled from "styled-components";
import placeholderImage from "../../public/elements/bubble.svg";
import cartwheelImage from "../../public/images/cartwheel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappeningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Header = styled.h1`
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 85.57px;
  color: #620981;
  text-align: center;
  margin: 0;
  height: 128px;
  width: 100%;
  max-width: 990px;

  @media (max-width: 745px) {
    font-size: 32px;
    line-height: 42.78px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 990px;
  position: relative;

  @media (max-width: 745px) {
    margin-top: -80px;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 80px;

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0 5px;
  }

  .slick-track {
    display: flex;
  }

  .slick-list {
    padding: 0;
  }

  /* Style for dots */
  .slick-dots {
    bottom: -65px;
  }

  .slick-dots li {
    width: 10px;
    height: 10px;
    margin: 0 10px;
  }

  .slick-dots li button:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #620981;
    opacity: 1;
    border: 1px solid transparent;
  }

  .slick-dots .slick-active button:before {
    background-color: #ffffff;
    border-color: #111111;
  }
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 745px) {
    gap: 15px;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  max-width: 404px;
  height: auto;
  position: relative;
  overflow: hidden;
  background-image: url(${placeholderImage});
  background-size: cover;
  background-position: center;
  mask-image: url(${placeholderImage});
  mask-size: cover;
  mask-repeat: no-repeat;

  @media (max-width: 745px) {
    max-width: 247px;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

const TextContainer = styled.div`
  padding: 20px;
  flex: 1;
`;

const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #111111;
  margin: 0;

  @media (max-width: 745px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const SubHeading = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #505050;
  margin: 2px 0 10px;

  @media (max-width: 745px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 745px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const ReadMore = styled.button`
  background: none;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 20px;
  padding: 0;
  transition: color 0.3s;

  &:hover {
    color: #620981;
    font-weight: 500;
  }

  @media (max-width: 745px) {
    font-size: 14px;
    line-height: 21px;
    margin-left: 0px;
  }
`;

const SignUpButton = styled.button`
  width: 202px;
  height: 46px;
  border-radius: 60px;
  padding: 10px;
  background-color: #620981;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #430159;
  }

  @media (max-width: 745px) {
    width: 159px;
    height: 37px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CardComponent = () => (
  <SlideContent>
    <Placeholder>
      <Image src={cartwheelImage} alt="Event Image" />
    </Placeholder>
    <TextContainer>
      <Heading>Wheel Pose Workshop</Heading>
      <SubHeading>23.04.2024</SubHeading>
      <Description>
        This workshop will cover how you can improve, deepen and develop your
        backbends in a safe, injury-free and healthy way. We will go through
        simple but effective techniques to use the muscles necessary to create
        balance and reduce the risk of injury in your yoga practice...
        <ReadMore>Read more</ReadMore>
      </Description>
      <SignUpButton>Sign up</SignUpButton>
    </TextContainer>
  </SlideContent>
);

export const Happenings = () => {
  return (
    <HappeningsContainer>
      <Header>Happenings</Header>
      <ContentContainer>
        <SliderContainer>
          <Slider {...sliderSettings}>
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <CardComponent />
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </ContentContainer>
    </HappeningsContainer>
  );
};
