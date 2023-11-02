import enTranslation from "../Translation/en.json";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledCourseCard = styled.div`
  display: inline-flex;
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 163, 134, 0.5);
  background: rgba(255, 255, 255, 0.8);

  img {
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

  h5 {
    color: #000;
    text-align: center;
    font-size: 16px;
    //font-style: normal;
    font-weight: 600;
    //line-height: normal;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-top: 16px;
  }

  p {
    //color: #000;
    //text-align: justify;
    //font-size: 20px;
    //font-style: normal;
    //font-weight: 700;
    //line-height: normal;

    //this fall och framåt:
    color: #000;
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

export const CourseCard = () => {
  const { t, ready } = useTranslation();

  const courses = t("courses", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <StyledCourseCard>
            <img src={course.imageUrl} alt={course.imageAlt} />
            <CourseCardText>
              <h5>{course.courseName}</h5>
              <p>{course.courseBrief}</p>
              <CourseCardButton>{course.button}</CourseCardButton>
            </CourseCardText>
          </StyledCourseCard>
        </div>
      ))}
    </>
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
