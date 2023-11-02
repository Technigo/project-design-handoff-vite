import { CourseCarousel } from "./CourseCarousel.jsx";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledCourses = styled.div`
  //background: url(/assets/background.png);
  display: flex;
  flex-direction: column;

  h2 {
    color: #081957;
    text-align: center;
    font-size: 20px;
    //font-style: normal;
    font-weight: 600;
    //line-height: normal;
    text-transform: uppercase;
    margin: 60px 0 30px;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
`;

const CoursesButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #202537;
  color: #fff6e9;
  font-size: 16px;
  //font-style: normal;
  font-weight: 500;
  //line-height: normal;
  text-transform: uppercase;
  margin: 30px 0 60px;
`;

export const Courses = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <>
      <StyledCourses>
        <h2>{t("main.upcoming")}</h2>
        <CourseCarousel />
      </StyledCourses>
      <StyledButton>
        <CoursesButton>{t("main.button")}</CoursesButton>
      </StyledButton>
    </>
  );
};
