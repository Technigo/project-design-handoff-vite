import { CourseCard } from "./CourseCard";
import courses from "../assets/courses.json";

export const Courses = () => {
  console.log(courses);
  return courses.courses.map((course) => (
    <div key={course.id}>
      <CourseCard
        course={course.course}
        image={course.image}
        age={course.age}
        time={course.time}
        teacher={course.teacher}
      />
    </div>
  ));
};
