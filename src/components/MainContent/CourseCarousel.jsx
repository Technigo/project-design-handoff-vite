import enTranslation from "../Translation/en.json";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive"; // Import the media query hook from react-responsive for responsive design
import styled from "styled-components";

// ------- Contains some commented out code that may be used later for desktop styling -------

// Create a styled component for the carousel container
const CarouselContainer = styled.div`
  width: 100%; /* Set the width of the carousel */
  height: 100%;
  overflow: auto;
  display: flex; /* Display course cards side by side */
  scroll-behavior: smooth;
  gap: 12px;
  padding: 0 24px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 0 65px;
  }
`;

// Create a styled component for the course card
const StyledCourseCard = styled.div`
  height: 100%;
  width: 300px; /* Set a width for each course card */
  flex-shrink: 0; /* Prevent cards from shrinking */
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 163, 134, 0.5);
  background: rgba(255, 255, 255, 0.8);

  img {
    height: 360px;
    width: 300px;
    object-fit: cover;
    border-radius: 16px 16px 0px 0px;
    background: lightgray 50% / cover no-repeat;
  }

  @media screen and (min-width: 1024px) and (max-width: 1360px) {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      height: 220px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1360px) {
    width: 100%;
    height: 380px;

    img {
      height: 220px;
      width: 100%;
    }
  }
`;

// Create a styled component for the course card button
const CourseCardButton = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  border-radius: 8px;
  background: #ffa386;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

// const CourseBrief = styled.div`
//   @media screen and (min-width: 1024px) {
//      p {
//       height: 100%;
//       flex: 1; /* Fill out the remaining vertical space */
//     //}
//   }
// `;

// Create a styled component for the course card text
const CourseCardText = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  text-align: center;

  h5 {
    color: #202537;
    text-align: center;
    font-size: 15px; // Made it 1px smaller than the design so the text doesn't overflow to two lines on one of the cards
    font-weight: 600;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    width: 100%;
  }

  p {
    // Styling for the first bolder words
    //     //color: #202537;
    //     //text-align: justify;
    //     //font-size: 20px;
    //     //font-style: normal;
    //     //font-weight: 700;
    //     //line-height: normal;

    // Styling for the rest of the text
    color: #202537;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: none;
  }

  @media screen and (min-width: 1024px) {
    position: relative;

    h5 {
      display: block; /* Display h5 on larger screens */
      position: absolute;
      //margin-bottom: 300px;
      /* right: 27px;
      top: 110px; */
      color: #fff;
      font-size: 32px;
      top: -70%; /* Move to the vertical center of the parent */
      left: 50%; /* Move to the horizontal center of the parent */
      transform: translate(
        -50%,
        -50%
      ); /* Center the h5 both horizontally and vertically */
    }

    p {
      display: block;
      text-align: left;
      padding: 10px 12px;
      height: 100%;
      //flex: 1; /* Fill out the remaining vertical space */
    }
  }
`;

let courseArray = enTranslation.courses; // Retrieve course data from English translations
console.log(courseArray);

export const CourseCarousel = () => {
  const { t, ready } = useTranslation();

  const courses = t("courses", { returnObjects: true }); // Translate and retrieve course data
  const isWideScreen = useMediaQuery({ query: "(min-width: 1024px)" }); // Check if the screen is wide

  if (!ready) return "Loading translations..."; // Display loading message if translations are not ready
  return (
    <CarouselContainer>
      {courses.map((course, index) => (
        <StyledCourseCard key={index}>
          <img src={course.imageUrl} alt={course.imageAlt} />
          <CourseCardText>
            <h5>{isWideScreen ? course.courseNameShort : course.courseName}</h5>
            {/* <CourseBrief> */}
            <p>{course.courseBrief}</p>
            {/* </CourseBrief> */}
            <CourseCardButton>{course.button}</CourseCardButton>
          </CourseCardText>
        </StyledCourseCard>
      ))}
    </CarouselContainer>
  );
};
