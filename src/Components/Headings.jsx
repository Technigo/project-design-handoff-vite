import styled from "styled-components";

const Heading = styled.h1`
  font-size: var(--heading-size-mobile);
  font-style: italic;
  font-weight: 300;

  @media (min-width: 835px) {
    font-size: var(--heading-size-tablet);
    font-weight: var(--heading-weight);
  }
`

export const Headings = ({ sectionId }) => {

  const headingCollection = [
    {
      sectionId: 1,
      text: "Workout"
    },
    {
      sectionId: 2,
      text: "Workout plans"
    },
    {
      sectionId: 3,
      text: "Reviews"
    },
    {
      sectionId: 4,
      text: "Trainers"
    },
    {
      sectionId: 5,
      text: "About us"
    },
    {
      sectionId: 6,
      text: "Contact us"
    },
    {
      sectionId: 7,
      text: "Social media"
    }
  ];
  
  return (
    <Heading key={sectionId}>
      {headingCollection.map((heading) => heading.text.toUpperCase())[sectionId - 1]}
    </Heading>
  )
}
