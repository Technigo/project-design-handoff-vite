import { useState, useRef } from "react"
import feedback from "../json/feedback.json"
import { FeedbackCard } from "./reusable/FeedbackCard.jsx"

export const FeedbackCarousel = () => {
  const [slide, setSlide] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  //Touch events to enable swiping in the carousel rather than clicking
  //It determines when and where a touch events start and end using "useRef"
  //It also triggers actions based on swip direction (change card in the carousel)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  //clientX is a given property and gives the X position of a touch event
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide()
    }
    touchStartX.current = null
    touchEndX.current = null
  }
  //End of touch events

  const nextSlide = () => {
    setSlide(slide === feedback.feedback.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? feedback.feedback.length - 1 : slide - 1)
  }

  return (
    <div
      className="relative desktop:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {feedback.feedback.map(
        ({ id, photo, text, sender, profession }, index) => {
          return (
            <FeedbackCard
              currentCard={slide === index}
              key={id}
              photo={photo}
              text={text}
              sender={sender}
              profession={profession}
            />
          )
        }
      )}
      <span className="w-full absolute -bottom-8 left-0 flex place-content-center">
        {feedback.feedback.map((_, index) => {
          return (
            <button
              className="bg-grey-dot2 hover:bg-grey-dot1 w-2 h-2 rounded-full border-none outline-none mx-1 cursor-pointer"
              key={index}
              onClick={() => setSlide(index)}></button>
          )
        })}
      </span>
    </div>
  )
}
