//import styled
import styled from "styled-components";

//import picture
import Lotus from "../../public/images/lotus.png";

//import hook
import { useState } from "react";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";

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

// const ImageWrapper = styled.div`
//   padding-top: 33px;
//   background-image: url(${Lotus});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.1;
// `;

// const PhiloWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const ImageWrapper = styled.div`
  padding-top: 33px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 100%; */
    background-image: url(${Lotus});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.1;
    /* pointer-events: none; */
    z-index: -1; //set picture behind the context
  }
`;

const PhiloWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  /* align-items: center; */
  position: relative; //keeps content positioned correctly in the wrapper
  z-index: 1;
`;

const PhiloTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 17px;
  text-align: center;

  @media all and (min-width: 744px) {
    font-size: 24px;
  }

  @media all and (min-width: 1024px) {
    font-size: 28px;
  }

  &:hover {
    cursor: pointer;
    color: var(--primary-prpl);
  }
`;

const PhiloText = styled.p`
  font-size: 12px;
  color: var(--primary-grey);
  padding-bottom: 17px;
  text-align: center;

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 1024px) {
    font-size: 18px;
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
  const [selected, setSelected] = useState(null); //track the selected item

  const handleTitleClick = (index) => {
    if (selected === index) {
      setSelected(null); //deselect if clicked again
    } else {
      setSelected(index); //select the clicked index
    }
  };

  return (
    <PhiloSection>
      <HeadingTwo>The Philosophy</HeadingTwo>
      <ParagraphTwo>
        We aim to nurture the seeds of a yogic lifestyle, knowing they&#39;ll
        blossom uniquely in each of us. May you discover your center, your
        essence, and make room for it in your daily life.
      </ParagraphTwo>
      <ImageWrapper>
        <PhiloWrapper>
          {philoData.map((data, index) => (
            <div key={index}>
              <PhiloTitle onClick={() => handleTitleClick(index)}>
                {data.title}
              </PhiloTitle>
              {selected === index && <PhiloText>{data.answer}</PhiloText>}
            </div>
          ))}
        </PhiloWrapper>
      </ImageWrapper>
    </PhiloSection>
  );
};
