import { createContext, useContext, useState } from "react"

const CarouselContext = createContext()

export const CarouselProvider = ({ children }) => {
  const [feedbackNumber, setFeedbackNumber] = useState(1)
  

  const changeNumber = (newNumber) => {
    setFeedbackNumber(newNumber)
  }

  const toggleNumber = (direction) => {
    setFeedbackNumber(
      (direction) =>
        direction === "right" ? feedbackNumber -1 : feedbackNumber +1
      )
  }

  return (
    <CarouselContext.Provider value={{feedbackNumber, changeNumber, toggleNumber}}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => useContext(CarouselContext);
