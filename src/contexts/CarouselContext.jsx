import { createContext, useContext, useState } from "react"
import { useSwipeable } from "react-swipeable"
import Jim from "/Jim.png"
import Elvira from "/Elvira.png"
import Mike from "/Mike.png"

const CarouselContext = createContext()

export const CarouselProvider = ({ children }) => {
  const [feedbackNumber, setFeedbackNumber] = useState(0)

  const feedback = [
    {
      image: Jim,
      text: "“I am so happy that I found Urban Spin for me, the classes are giving me the best balance after a stressful day at work!”",
      name: "Jim Svensson,",
      title: "Architect",
    },
    {
      image: Elvira,
      text: "“The classes at Urban Spin are my highlight of the week. The instructors are amazing and the high-beat music gives the right push. Love it!”",
      name: "Elvira Andersson,",
      title: "Influencer",
    },
    {
      image: Mike,
      text: "“What I love the most is the flexibility, there are so many classes during the week! And of course, the session itself.”",
      name: "Mike Kjell,", 
      title: "Project Manager",
    },
  ]
  
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setFeedbackNumber((prevNumber) =>
        prevNumber === feedback.length - 1 ? 0 : prevNumber + 1
      )
    },
    onSwipedRight: () => {
      setFeedbackNumber((prevNumber) =>
        prevNumber === 0 ? feedback.length - 1 : prevNumber - 1
      )
    },
    preventDefaultTouchmoveEvent: true,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  const changeNumber = (newNumber) => {
    setFeedbackNumber(newNumber)
  }

  return (
    <CarouselContext.Provider value={{feedbackNumber, feedback, handlers, changeNumber}}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarousel = () => useContext(CarouselContext);
