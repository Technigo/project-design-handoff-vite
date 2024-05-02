//import styled
import styled from "styled-components";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { HappeningsCard } from "../reusables/HappeningsCard";
import { Arrow } from "../reusables/Arrow";

//import pictures
import Cartwheel from "../../public/images/cartwheel.png";

//import react-slick dependencies for carousel
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//data object for yogis
const happeningsData = [
  {
    picture: Cartwheel,
    title: "Wheel Pose Workshop",
    date: "23.04.2024",
    description:
      "This workshop will cover how you can improve, deepen and develop your backbends in a safe, injury-free and healthy way. We will go through simple but effective techniques to use the muscles necessary to create balance and reduce the risk of injury in your yoga practice...",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "I'm baby humblebrag tempor cronut, lomo copper mug elit yes plz. Hashtag cred exercitation viral neutral milk hotel.I'm baby humblebrag tempor cronut, lomo copper mug elit yes plz. Hashtag cred exercitation viral neutral milk hotel.",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Af selvage pickled cloud bread gorpcore chillwave swag culpa marxism beard craft beer in nostrud disrupt.Af selvage pickled cloud bread gorpcore chillwave swag culpa marxism beard craft beer in nostrud disrupt.",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Af selvage pickled cloud bread gorpcore chillwave swag culpa marxism beard craft beer in nostrud disrupt.Af selvage pickled cloud bread gorpcore chillwave swag culpa marxism beard craft beer in nostrud disrupt.",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Tumeric jean shorts echo park nisi, artisan before they sold out grailed mixtape pabst pinterest.Tumeric jean shorts echo park nisi, artisan before they sold out grailed mixtape pabst pinterest.",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch. Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch. ",
  },

  {
    picture: Cartwheel,
    title: "Dummy text?",
    date: "12.34.5678",
    description:
      "Organic shoreditch minim try-hard, ennui bruh sint enim street art palo santo. Organic shoreditch minim try-hard, ennui bruh sint enim street art palo santo.",
  },

  {
    picture: Cartwheel,
    title: "More dummy text!",
    date: "12.34.5678",
    description:
      "Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch. Lorem keytar nostrud, hexagon dreamcatcher irure edison bulb sus beard roof party brunch.",
  },
];

//styles
const HappeningSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px 16px;

  @media all and (min-width: 744px) {
    padding: 64px 59px;
  }

  @media all and (min-width: 744px) {
    padding: 90px 127px;
  }
`;

//styling picture in the HappeningsCard component
const StyledImage = styled.img`
  border-radius: 30% 0;
  width: 100%;
  object-fit: contain;

  @media all and (min-width: 744px) {
    border-radius: 35% 35% 0 35%;
    width: 100%;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  @media all and (max-width: 743px) {
    display: none; //hide arrows on mobile
  }
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  left: 20px;
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  right: 20px;
`;

//component
export const Happenings = () => {
  const sliderRef = useRef(null); //use ref to controll slider

  const handleLeftArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); //navigate to previous slide
    }
  };

  const handleRightArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); //navigate to next slide
    }
  };

  //slider settings for carousel styling reponsiveness
  const sliderSettings = {
    infinit: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <HappeningSection>
      <HeadingTwo>Happenings</HeadingTwo>
      <LeftArrowWrapper onClick={handleLeftArrow}>
        <Arrow left={true} alt="left arrow" />
      </LeftArrowWrapper>
      <RightArrowWrapper onClick={handleRightArrow}>
        <Arrow alt="right arrow" />
      </RightArrowWrapper>
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* render HappeningsCard with data */}
        {happeningsData.map((hap, index) => (
          <HappeningsCard
            key={index}
            picture={
              <StyledImage src={hap.picture} alt={`${hap.title} picture`} />
            }
            title={hap.title}
            date={hap.date}
            description={hap.description}
          />
        ))}
      </Slider>
    </HappeningSection>
  );
};
