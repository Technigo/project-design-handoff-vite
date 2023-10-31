

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
    <div key={sectionId} className="subheadings">
        {subheadingCollection.map((subheadingGroup) => subheadingGroup.subheadingTexts.map((subheading, index) => {
          return (
            <h2 key={index}>{subheading}</h2>
          )
        }))[sectionId - 1]}
    </div>
  )
}
