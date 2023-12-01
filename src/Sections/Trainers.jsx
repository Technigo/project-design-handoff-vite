import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Headings } from "../Components/Headings";
import { TrainerCard } from "../Components/TrainerCard";


const TrainerWrapper = styled.section`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const TrainerCardWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const Trainers = () => {
  const sectionId = 4;
  
  const trainerData = [
    {
      "image": "./images/trainer-1.png",
      "name": "Natasha"
    },
    {
      "image": "./images/trainer-2.png",
      "name": "Chloe"
    },
    {
      "image": "./images/trainer-3.png",
      "name": "Taylor"
    },
    {
      "image": "./images/trainer-4.png",
      "name": "Rich"
    },
    {
      "image": "./images/trainer-1.png",
      "name": "Natasha"
    },
    {
      "image": "./images/trainer-2.png",
      "name": "Chloe"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 393,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <TrainerWrapper>
      <Headings sectionId={sectionId} />
      <TrainerCardWrapper>
        <Slider {...settings}>
          {trainerData.map((trainer, index) => {
            return (
              <div key={index}>
                <TrainerCard trainer={trainer} />
              </div>
            )
          })}
        </Slider>
      </TrainerCardWrapper>
    </TrainerWrapper>
  )
}
