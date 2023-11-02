import enTranslation from "../Translation/en.json";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%; /* Set the width of the carousel */
  height: 100%;
  overflow: auto;
  display: flex; /* Display course cards side by side */
  scroll-behavior: smooth; /* Enable smooth scrolling */
  gap: 12px;
  //margin: 0 24px;
  padding: 0 24px; /* Add padding on both sides */
  /* margin-left: -24px; /* Offset the margin on the left side */

  /* & > :first-child {
    margin-left: 24px; /* Add margin to the first card */
  /*} */
  /* 
  & > :last-child {
    margin-right: 24px; /* Add margin to the last card */
  /*}  */
`;

const StyledCourseCard = styled.div`
  height: 100%;
  width: 300px; /* Set a width for each course card */
  flex-shrink: 0; /* Prevent cards from shrinking */
  //display: inline-flex;
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
`;

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
  //font-style: normal;
  font-weight: 500;
  //line-height: normal;
  margin-bottom: 12px;
`;

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
    //position: absolute;
    font-size: 15px; // Made it 1px smaller than the design so the text doesn't overflow to two lines on one of the cards
    //font-style: normal;
    font-weight: 600;
    //line-height: normal;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-top: 16px;
  }

  p {
    //     //color: #202537;
    //     //text-align: justify;
    //     //font-size: 20px;
    //     //font-style: normal;
    //     //font-weight: 700;
    //     //line-height: normal;

    //this fall och framåt:
    color: #202537;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: none;
  }

  @media screen and (min-width: 1024px) {
    p {
      display: block;
    }
  }
`;

let courseArray = enTranslation.courses;
console.log(courseArray);

export const CourseCarousel = () => {
  const { t, ready } = useTranslation();

  const courses = t("courses", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <CarouselContainer>
      {courses.map((course, index) => (
        <StyledCourseCard key={index}>
          <img src={course.imageUrl} alt={course.imageAlt} />
          <CourseCardText>
            <h5>{course.courseName}</h5>
            <p>{course.courseBrief}</p>
            <CourseCardButton>{course.button}</CourseCardButton>
          </CourseCardText>
        </StyledCourseCard>
      ))}
    </CarouselContainer>
  );
};

// import courseData from "./enCourses.json";
// import { useTranslation } from "react-i18next";
// import styled from "styled-components";

// const StyledCourseCard = styled.div`
//   display: inline-flex;
//   padding-bottom: 0px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 16px;
//   border-radius: 20px;
//   border: 0.5px solid rgba(255, 163, 134, 0.5);
//   background: rgba(255, 255, 255, 0.8);

//   img {
//     border-radius: 16px 16px 0px 0px;
//     background: lightgray 50% / cover no-repeat;
//   }
// `;

// const CourseCardButton = styled.button`
//   display: flex;
//   padding: 8px 12px;
//   justify-content: center;
//   align-items: flex-end;
//   gap: 10px;
//   border-radius: 8px;
//   background: #ffa386;
//   color: #fff;
//   font-size: 16px;
//   //font-style: normal;
//   font-weight: 500;
//   //line-height: normal;
//   margin-bottom: 12px;
// `;

// const CourseCardText = styled.div`
//   display: flex;
//   padding: 0px 4px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   align-self: stretch;

//   h5 {
//     color: #000;
//     text-align: center;
//     font-size: 16px;
//     //font-style: normal;
//     font-weight: 600;
//     //line-height: normal;
//     letter-spacing: 0.8px;
//     text-transform: uppercase;
//     margin-top: 16px;
//   }

//   p {
//     //color: #000;
//     //text-align: justify;
//     //font-size: 20px;
//     //font-style: normal;
//     //font-weight: 700;
//     //line-height: normal;

//     //this fall och framåt:
//     color: #000;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     display: none;
//   }

//   @media screen and (min-width: 1024px) {
//     p {
//       display: block;
//     }
//   }
// `;

// let courseArray = courseData.courses;
// console.log(courseArray);

// export const CourseCard = () => {
//   const { t, ready } = useTranslation();

//   const courses = t("courses", { returnObjects: true });

//   if (!ready) return "loading translations...";
//   return (
//     <>
//       {courses.map((course, index) => (
//         <div key={index} courses={course}>
//           <StyledCourseCard>
//             <img src={course.imageUrl} alt={course.imageAlt} />
//             <CourseCardText>
//               <h5>{course.courseName}</h5>
//               <p>{course.courseBrief}</p>
//               <CourseCardButton>Read more</CourseCardButton>
//             </CourseCardText>
//           </StyledCourseCard>
//         </div>
//       ))}
//     </>
//   );
// };
