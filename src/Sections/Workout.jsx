import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutVideoCard } from "../Components/WorkoutVideoCard";

const WorkOutWrapper = styled.section`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const Workout = () => {
  const sectionId = 1;

  const { t } = useTranslation();

  const workoutData = [
    {
        "image": "./images/workout-1.png",
        "title": t("workout.videoTexts.one.title"),
        "length": t("workout.videoTexts.one.length")
    },
    {
        "image": "./images/workout-2.png",
        "title": t("workout.videoTexts.two.title"),
        "length": t("workout.videoTexts.two.length")
    },
    {
        "image": "./images/workout-3.png",
        "title": t("workout.videoTexts.three.title"),
        "length": t("workout.videoTexts.three.length")
    },
    {
        "image": "./images/workout-4.png",
        "title": t("workout.videoTexts.four.title"),
        "length": t("workout.videoTexts.four.length")
    },
    {
      "image": "./images/workout-1.png",
      "title": t("workout.videoTexts.five.title"),
      "length": t("workout.videoTexts.five.length")
    },
    {
      "image": "./images/workout-2.png",
      "title": t("workout.videoTexts.six.title"),
      "length": t("workout.videoTexts.six.length")
    }
  ];
  
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
    <WorkOutWrapper>
      <Headings sectionId={sectionId} />
      <Subheadings sectionId={sectionId} />
      <Container>
        <Slider {...settings}>
          {workoutData.map((video, index) => {
            return (
              <div key={index}>
                <WorkoutVideoCard video={video} />
              </div>
            )
          })}
        </Slider>
      </Container>
    </WorkOutWrapper>
  )
}
