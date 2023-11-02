import { useState } from "react";
import courses from "../../data/coursesdata.json";
import { Button } from "../Button/Button";
import arrow from "../../../public/assets/Swipe.svg"
import "./Courses.css";

export const CourseCarousel = () => {
    // useState to store and keep track of what slide/course-card the user is on,
    // using id to identify them, inital state 0.
    const [slide, setSlide] = useState(0);

    //declaring function to handle click of right arrow
    const nextSlide = () => {
        //IS THIS REALLY WHAT IM DOING?!?!?!?
        //if the course-card id is the lenght of the courses array,
        //right arrow click returns the course-card with id 0, otherwise increasing id with 1.
        setSlide(slide === courses.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? courses.length - 1 : slide - 1);
    };

    return (
        <>
            <div className="carousel">
                <img src={arrow} alt="Arrow button pointing left."
                    className="arrow arrow-left"
                    onClick={prevSlide}
                />
                {courses.map((course, id) => {
                    return (
                        <div
                            key={course.id}
                            className={
                                slide === id
                                    ? "course-card"
                                    : "course-card slide-hidden"
                            }
                        >
                            <img className="course-image" src={course.imageUrl} alt={course.imgageAlt} />
                            <p>{course.text}</p>
                            <p className="p-bold">{course.shortDescription}
                            {course.startDatePrice}</p>
                            
                            
                            <Button>Book your spot</Button>
                        </div>
                    );
                })}
                <img src={arrow} alt="Arrow button pointing right."
                    className="arrow arrow-right"
                    onClick={nextSlide}
                />
                <span className="indicators">
                    {courses.map((_, id) => {
                        return (
                            <button
                                key={id}
                                onClick={() => setSlide(id)}
                                className={
                                    slide === id
                                        ? "indicator"
                                        : "indicator indicator-inactive"
                                }
                            ></button>
                        );
                    })}
                </span>
            </div>
        </>
    );
};
