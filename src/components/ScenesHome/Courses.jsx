import { CourseCarousel } from "./CourseCarousel"
import "./Courses.css"

export const Courses = () => {
  return (
    <section className="courses-section">
        <h2>Courses coming up</h2>
        <h3>Our courses are designed for improved health during and after menopause</h3>
        <CourseCarousel />
    </section>
  )
}
