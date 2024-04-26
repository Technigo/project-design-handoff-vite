//import styled
import styled from "styled-components";

//import picture
import Lotus from "../../public/images/lotus.png";

//import hook
import { useState, useEffect } from "react";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";

//custom hook to determine if screen with is above 744px breakpoint for tablet
const useIsTablet = (breakpoint) => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isTablet;
};

//styles
const PhiloSection = styled.section`
  padding: 84px 16px;

  @media all and (min-width: 744px) {
    padding: 80px 16px;
  }

  @media all and (min-width: 1024px) {
    padding: 174px 16px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${Lotus});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.1;
    z-index: -1; //set picture behind the context

    @media all and (min-width: 744px) {
      z-index: 1;
      opacity: 1;
      right: -100%;
      top: 14%;
      bottom: 18%;
    }

    @media all and (min-width: 1024px) {
      top: 25%;
      left: 0;
      right: 0;
      bottom: 21%;
    }
  }
`;

const PhiloWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 15px 0 15px;

  position: relative; //keeps content positioned correctly in the wrapper
  z-index: 1;

  @media all and (min-width: 744px) {
    //to put it into two columns on tablet
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 21px;
    row-gap: 65px;
    padding: 50px 93px 0 93px;
  }
  @media all and (min-width: 1024px) {
    //to put it into two columns on tablet
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 350px;
    row-gap: 77px;
    padding: 85px 93px 0 93px;
  }
`;

const TitleTextWrapper = styled.div`
  text-align: center; // Default alignment

  @media all and (min-width: 1024px) {
    justify-self: ${(props) =>
      props.index % 2 === 0
        ? "start"
        : "end"}; // Left or right alignment based on index
  }
`;

const PhiloTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 17px;
  text-align: center;
  cursor: pointer;

  @media all and (min-width: 744px) {
    font-size: 24px;
    text-align: left;
  }

  @media all and (min-width: 1024px) {
    font-size: 28px;
    text-align: ${(props) =>
      props.index % 2 === 0 ? "left" : "right"}; // Left or right based on index
  }
  ${({ isTablet, isSelected }) =>
    !isTablet &&
    isSelected &&
    `color: var(--primary-prpl);`} // Purple when selected on smaller screens

  @media all and (min-width: 744px) {
    &:hover {
      color: var(--primary-prpl); // Purple on hover for tablet or bigger
    }
  }
`;

const PhiloText = styled.p`
  font-size: 12px;
  text-align: center;
  color: var(--primary-prpl);
  padding-bottom: 17px;

  @media all and (min-width: 744px) {
    font-size: 14px;
    text-align: left;
    padding-bottom: 0;
    color: var(--primary-grey);
  }

  @media all and (min-width: 1024px) {
    font-size: 18px;
    text-align: ${(props) =>
      props.index % 2 === 0 ? "left" : "right"}; // Left or right based on index
  }

  @media all and (min-width: 744px) {
    &:hover {
      color: var(--primary-prpl); // Purple on hover for tablet or bigger
    }
  }
`;

//data for philosphy section
const philoData = [
  {
    title: "Yama | Ethical Living",
    answer:
      "Fostering a compassionate and respectful relationship with yourself and others.",
  },

  {
    title: "Niyamas | Personal practises",
    answer:
      "Self-discipline or observances, such as cleanliness, contentment and self-discipline.",
  },

  {
    title: "Asana | Postures",
    answer:
      "Physical postures or poses, which are commonly practiced in modern yoga classes.",
  },

  {
    title: "Pranayama | Mindful breathing",
    answer:
      "Breathing techniques, that aims to calm the mind and enhance the flow of prana (life force).",
  },

  {
    title: "Prathyahara | Turning inward",
    answer:
      "Creating a mental filter, allowing us to focus on what truly matters while tuning out the noise.",
  },

  {
    title: "Dharana | Concentration",
    answer:
      "Training your mind to focus on one thing at a time, which can help improve your attention. ",
  },

  {
    title: "Dhyana | De-concentration",
    answer:
      "Meditation, the uninterrupted flow of concentration on anobject or thought.",
  },

  {
    title: "Samadhi | Pure bliss",
    answer:
      "Enlightenment or union with the divine, a state of spiritual realisation and oneness, with pure awareness.",
  },
];

//component
export const Philosophy = () => {
  const tabletBreakpoint = 744;
  const isTablet = useIsTablet(tabletBreakpoint); //check if tablet or bigger

  const [selected, setSelected] = useState(null); //track the selected item

  const handleTitleClick = (index) => {
    if (!isTablet) {
      setSelected(selected === index ? null : index);
    }
  };

  return (
    <ImageWrapper>
      <PhiloSection>
        <HeadingTwo>The Philosophy</HeadingTwo>
        <ParagraphTwo>
          We aim to nurture the seeds of a yogic lifestyle, knowing they&#39;ll
          blossom uniquely in each of us. May you discover your center, your
          essence, and make room for it in your daily life.
        </ParagraphTwo>
        {/* <ImageWrapper> */}
        <PhiloWrapper>
          {philoData.map((data, index) => (
            <TitleTextWrapper
              key={index}
              isTablet={isTablet}
              isSelected={selected === index}
            >
              <PhiloTitle
                index={index}
                isTablet={isTablet}
                isSelected={selected === index}
                onClick={() => handleTitleClick(index)}
              >
                {data.title}
              </PhiloTitle>
              {(isTablet || selected === index) && (
                <PhiloText index={index}>{data.answer}</PhiloText>
              )}
            </TitleTextWrapper>
          ))}
        </PhiloWrapper>
        {/* </ImageWrapper> */}
      </PhiloSection>
    </ImageWrapper>
  );
};
