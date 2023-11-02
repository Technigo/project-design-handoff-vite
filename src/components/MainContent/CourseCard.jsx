import courses from "./courses.json";
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

export const CourseCard = () => {
  return (
    <>
      {courses.map((course, index) => (
        <div key={index}>
          <StyledCourseCard>
            <img src={course.imageUrl} alt={course.imageAlt} />
            <CourseCardText>
              <h5>{course.courseName}</h5>
              <p>{course.courseBrief}</p>
              <CourseCardButton>Read more</CourseCardButton>
            </CourseCardText>
          </StyledCourseCard>
        </div>
      ))}
    </>
  );
};

{
  /* 
// import { SubHeading } from "../../Headings/SubHeading/SubHeading";
// import { Button } from "../../Buttons/Button";
// import articles from "../../../articles.json";
// import "./ArticleCard.css";

// export const ArticleCard = () => { 
//   return (
//     <div className="article-card">
//       {articles.map((article, index) => (
//         <div key={index}>
//           <div className="article-photo-wrapper">
//             <img src={article.imageUrl} alt={article.imageAlt} />
//           </div>
//           <div className="article-month-wrapper">
//             <p className="article-month">{article.articleMonth}</p>
//           </div>
//           <div className="article-text-wrapper">
//             <SubHeading className={"my-words-h3"} text={article.articleName} />
//             <p>{article.articleBrief}</p>
//             <Button
//               className={`article-button`}
//               buttonName={`Read article`}
//               link={article.articleLink}
//               icon={`/assets/Doc-article.svg`}
//               iconAlt={`Read the article, opening in a new window`}
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }; */
}
