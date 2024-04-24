//import styled
import styled from "styled-components";

//import reusables
import { HeadingTwoVar } from "../reusables/HeadingTwoVar";
import { Arrow } from "../reusables/Arrow";

//import icon & image
import Dropdown from "../../public/icons/dropdown.svg";
import Rocks from "../../public/images/rocks.png";

//import hook
import { useState } from "react";

//styles
const FaqSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "ttl ttl ttl ttl ttl ttl ttl arrow arrow arrow arrow arrow"
    "faq faq faq faq faq faq faq faq faq faq faq faq";
  row-gap: 20px;
  padding: 68px 16px;

  @media all and (min-width: 744px) {
    grid-template-areas:
      "img img img img img ttl ttl ttl ttl arrow arrow arrow"
      "img img img img img faq faq faq faq faq faq faq";

    padding: 62px 24px;
  }
  @media all and (min-width: 1024px) {
    padding: 176px 124px;
  }
`;

const FaqImage = styled.img`
  grid-area: img;
  height: 300px; // Set a fixed height
  object-fit: cover;
  position: absolute;
  left: -2000px;

  @media all and (min-width: 744px) {
    height: 500px;
    left: -180px;
    padding-bottom: 0;
  }
  @media all and (min-width: 1024px) {
    left: -420px;
    height: 900px;
  }
`;

const HeadingWrapper = styled.div`
  grid-area: ttl;
  display: flex;
`;

const ArrowWrapper = styled.div`
  grid-area: arrow;
  display: flex;
  justify-content: space-between;
`;

const ArrowText = styled.p`
  font-size: 20px;
  @media all and (min-width: 744px) {
    font-size: 16px;
  }
  @media all and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const FaqWrapper = styled.div`
  grid-area: faq;
`;

const FaqItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid var(--primary-blk);
`;

const FaqQuestion = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  text-align: left;
  color: var(--primary-blk);
  font-weight: 400;
  font-size: 20px;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const FaqAnswer = styled.div`
  font-size: 20px;
  display: ${({ show }) => (show ? "block" : "none")};
  color: var(--primary-prpl);

  @media all and (min-width: 744px) {
    font-size: 14px;
  }

  @media all and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const FaqIcon = styled.img`
  width: 20px;
  height: 20px;

  @media all and (min-width: 744px) {
    width: 10px;
    height: 10px;
  }

  @media all and (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

//component
export const FAQ = () => {
  const [expanded, setExpanded] = useState(null); //track if extra questions are shown
  const [selected, setSelected] = useState(null); //track selected question

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index); //toggle question open/close
  };

  const toggleExpand = () => {
    setExpanded(!expanded); //toggle expanded/collapsed state
  };

  const faqs = [
    {
      question: "What type of yoga classes do you offer?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "How do I know which class is right for me?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "What should I wear/bring to a yoga class?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "Do I need to bring my own yoga mat?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "Are there options for private yoga sessions?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "Is drop-in available or do I need a membership?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
    },
    {
      question: "What is your cancellation policy for classes?",
      answer:
        "I'm baby gluten-free try-hard yuccie cray bitters stumptown blog unicorn.",
      decodeURI,
    },
  ];

  const questionsShow = expanded ? faqs : faqs.slice(0, 4); //show 4 on mobile all when expanded

  return (
    <FaqSection>
      <FaqImage src={Rocks} alt="a tower of pepples"></FaqImage>
      <HeadingWrapper>
        <HeadingTwoVar>FAQ</HeadingTwoVar>
      </HeadingWrapper>
      <ArrowWrapper onClick={toggleExpand}>
        <ArrowText>See more </ArrowText>
        <Arrow />
      </ArrowWrapper>
      <FaqWrapper>
        {questionsShow.map((faq, index) => (
          <FaqItem key={index}>
            <FaqQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FaqIcon
                src={Dropdown}
                alt="dropdown"
                style={{
                  transform:
                    selected === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </FaqQuestion>
            <FaqAnswer show={selected === index}>{faq.answer}</FaqAnswer>
          </FaqItem>
        ))}
      </FaqWrapper>
    </FaqSection>
  );
};
