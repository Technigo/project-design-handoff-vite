import "/src/Landing-session/courses.css";
export const CourseCard = ({ image, alt, course, age, time, teacher }) => {
  return (
    <div className="course-info">
      <img src={image} alt={alt} />
      <h1>{course}</h1>
      <h2>{age}</h2>
      <p>{time}</p>
      <p>Teacher:{teacher}</p>
    </div>
  );
};
