import courses from "./courses.json";

export const CourseCard = () => {
  return (
    <div className="courseCard">
      {courses.map((course, index) => (
        <div key={index}>
          <img src={course.imageUrl} alt={course.imageAlt} />
          <h5>{course.courseName}</h5>
          <p>{course.courseBrief}</p>
          <button>Read more</button>
        </div>
      ))}
    </div>
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
