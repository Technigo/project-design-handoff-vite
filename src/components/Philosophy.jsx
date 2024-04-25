//import styled
import styled from "styled-components";

//import picture
//import Lotus from "../../public/images/lotus.png";

//import hook
import { useState } from "react";

//import reusables
import { HeadingTwo } from "../reusables/HeadingTwo";
import { ParagraphTwo } from "../reusables/ParagraphTwo";

//styles
const PhiloSection = styled.section``;

// const ImageWrapper = styled.div`
//   width: 100px;
//   height: 100px;
//   z-index: 2;
//   object-fit: cover;
// `;

const PhiloTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;

  @media all and (min-width: 744px) {
    font-size: 24px;
  }

  @media all and (min-width: 1024px) {
    font-size: 28px;
  }
`;

const PhiloText = styled.p`
  font-size: 12px;
  color: var(--primary-grey);

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
  const [selected, setSelected] = useState(null); // Track the selected item

  const handleTitleClick = (index) => {
    if (selected === index) {
      setSelected(null); // Deselect if clicked again
    } else {
      setSelected(index); // Select the clicked index
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
      {philoData.map((data, index) => (
        <div key={index}>
          <PhiloTitle onClick={() => handleTitleClick(index)}>
            {data.title}
          </PhiloTitle>
          {selected === index && <PhiloText>{data.answer}</PhiloText>}
        </div>
      ))}
    </PhiloSection>
  );
};
