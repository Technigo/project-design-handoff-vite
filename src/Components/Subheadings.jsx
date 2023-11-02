import styled from "styled-components";

const SubheadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
`

const Subheading = styled.h2`
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 24.22px;

  @media (min-width: 835px) {
    font-size: 30px;
  }
`

export const Subheadings = ({ sectionId }) => {

  const subheadingCollection = [
    {
      sectionId: 1,
      subheadingTexts: [
        "Cardio", 
        "HIIT", 
        "Yoga", 
        "Glutes", 
        "Back", 
        "Arms", 
        "Zumba", 
        "Stretch"
      ]
    },
    { 
      sectionId: 2,
      subheadingTexts: [
        "2 days a week", 
        "3 days a week", 
        "4 days a week", 
        "Arms", 
        "Back"
      ]
    }
  ]

  return (
    <SubheadingWrapper key={sectionId}>
        {subheadingCollection.map((subheadingGroup) => subheadingGroup.subheadingTexts.map((subheading, index) => {
          return (
            <Subheading key={index}>{subheading.toUpperCase()}</Subheading>
          )
        }))[sectionId - 1]}
    </SubheadingWrapper>
  )
}
