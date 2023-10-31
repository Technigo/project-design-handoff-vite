

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
    <h1 key={sectionId}>
      {headingCollection.map((heading) => heading.text)[sectionId - 1]}
    </h1>
  )
}
