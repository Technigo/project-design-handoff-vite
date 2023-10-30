import React from "react"
import courses from "../../data/coursesdata.json"

export const Courses = () => {
  return (
    <section>
        <h2>Courses coming up</h2>
        <h3>Our courses are designed for improved health during and after menopause</h3>
        {courses.map((course) => {
            return (
            <div className="course-card" key={course.id}>
            <img src={course.imageUrl} alt={course.imgageAlt} />
            <p>{course.text}</p>
            <p className="p-bold">{course.heading}</p>
            <button>Book your spot</button>
            </div>    
            )
        })}
        

       

    </section>
  )
}
