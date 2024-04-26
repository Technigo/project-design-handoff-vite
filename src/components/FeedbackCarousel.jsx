import { useState, useRef } from "react"
import feedback from "../json/feedback.json"
import { FeedbackCard } from "./reusable/FeedbackCard.jsx"

export const FeedbackCarousel = () => {
  const [slide, setSlide] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide()
    }
    touchStartX.current(null)
    touchEndX.current(null)
  }

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

/*
  return (
    <div className="relative desktop:hidden">
      <BsArrowLeftCircleFill
        className="absolute w-8 h-8 text-black left-4 cursor-pointer inset-y-1/2 tablet:hidden"
        onClick={prevSlide}
      />
      <BsArrowRightCircleFill
        className="absolute w-8 h-8 text-black right-4 cursor-pointer inset-y-1/2 tablet:hidden"
        onClick={nextSlide}
      />
     
      )}
      
    </div>
  );*/
