import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Headings } from "../Components/Headings";
import { Subheadings } from "../Components/Subheadings";
import { WorkoutPlanCard } from "../Components/WorkoutPlanCard";

const WorkOutPlansWrapper = styled.section`
  margin: 35px 0;  
  display: flex;
  flex-direction: column;
  gap: 9px;
`
const HeadingWithLock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const PlanCardWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

export const WorkoutPlans = () => {
  const sectionId = 2;

  const { t } = useTranslation();

  const workoutPlansData = [
    {
      "image": "./images/workout-4.png",
      "title": t("workoutPlans.planTexts.one")
    },
    {
      "image": "./images/workout-plan-2.png",
      "title": t("workoutPlans.planTexts.two")
    },
    {
      "image": "./images/workout-plan-3.png",
      "title": t("workoutPlans.planTexts.three")
    },
    {
      "image": "./images/workout-plan-4.png",
      "title": t("workoutPlans.planTexts.four")
    },
    {
      "image": "./images/workout-4.png",
      "title": t("workoutPlans.planTexts.five")
    },
    {
      "image": "./images/workout-plan-2.png",
      "title": t("workoutPlans.planTexts.six")
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <WorkOutPlansWrapper>
      <HeadingWithLock>
        <Headings sectionId={sectionId} />
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="lock-closed">
            <path 
              id="Icon" 
              d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" 
              stroke="#545F71" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </g>
        </svg>
      </HeadingWithLock>
      <Subheadings sectionId={sectionId} />
      <PlanCardWrapper>
        <Slider {...settings}>
          {workoutPlansData.map((plan, index) => {
            return (
              <div key={index}>
                <WorkoutPlanCard plan={plan} />
              </div>
            )
          })}
        </Slider>
      </PlanCardWrapper>
    </WorkOutPlansWrapper>
  )
}
