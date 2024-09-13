import Slider from "react-slick";
import styled from "styled-components";
import placeholderImage from "../../public/elements/bubble.svg";
import smallPlaceholderImage from "../../public/elements/placeholder.svg";
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

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42.78px;
  }

  @media (max-width: 725px) {
    font-size: 30px;
    line-height: 40.11px;
    margin-bottom: 30px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 990px;
  position: relative;

  @media (max-width: 1200px) {
    margin-top: -80px;
  }

  @media (max-width: 350px) {
    width: 120%;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 80px;
  box-sizing: border-box;

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-list {
    overflow: hidden;
    padding: 0;
  }

  @media (min-width: 726px) {
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
  }

  @media (max-width: 725px) {
    .slick-dots {
      bottom: -30px;
      display: block;
    }

    .slick-dots li {
      width: 8px;
      height: 8px;
      margin: 0 10px;
    }
  }

  @media (max-width: 410px) {
    .slick-slide {
      padding: 0 5px;
    }

    .slick-list {
      padding: 0;
    }

    .slick-slide > div {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 725px) {
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
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

  @media (max-width: 725px) {
    background-image: url(${smallPlaceholderImage});
    mask-image: url(${smallPlaceholderImage});
    width: 85.04px;
    height: 67.39px;
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;

  @media (max-width: 725px) {
    width: 105%;
    display: block;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  position: relative;
  text-align: left;
  margin: auto;

  @media (max-width: 725px) {
    align-items: center;
    max-width: calc(100% - 100px);
    padding: 10px;
  }
`;

const Heading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #111111;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 725px) {
    text-align: center;
    font-size: 18px;
    line-height: 20px;
  }
`;

const SubHeading = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #505050;
  margin: 2px 0 10px;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 725px) {
    font-size: 14px;
    line-height: 21px;
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

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
  }

  @media (max-width: 725px) {
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
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

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
    margin-left: 0px;
  }

  @media (max-width: 725px) {
    font-size: 14px;
    line-height: 24px;
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
  margin-top: 20px;

  &:hover {
    background-color: #430159;
  }

  @media (max-width: 1200px) {
    width: 159px;
    height: 37px;
    font-size: 14px;
    line-height: 21px;
    padding: 0;
  }

  @media (max-width: 725px) {
    width: 226px;
    height: 55px;
    font-size: 20px;
    line-height: 30px;
    margin-top: -20px;
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
      breakpoint: 725,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
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
