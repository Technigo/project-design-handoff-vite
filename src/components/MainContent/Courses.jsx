import { CourseCard } from "./CourseCard.jsx";

export const Courses = () => {
  return (
    <div className="upcomingCourses">
      <h2>Upcoming courses</h2>
      <CourseCard />
      <button>view all courses</button>
    </div>
  );
};
