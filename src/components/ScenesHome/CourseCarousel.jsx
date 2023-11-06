import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./Courses.css";

export const CourseCarousel = () => {
    const { t, ready } = useTranslation();

    const coursesItems = t("home.courses", {returnObjects: true})

    const coursesArray = t("home.courses.coursesArray", {returnObjects: true})

    if (!ready) return "loading translations...";

    // useState to store and keep track of what slide/course-card the user is on,
    // using id to identify them, inital state 0.
    const [slide, setSlide] = useState(0);


    //declaring function to handle click of right arrow
    const nextSlide = () => {
        //IS THIS REALLY WHAT IM DOING?!?!?!?
        //if the course-card id is the lenght of the courses array,
        //right arrow click returns the course-card with id 0, otherwise increasing id with 1.
        setSlide(slide === coursesArray.length - 1 ? 0 : slide + 1);
        
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? courses.length - 1 : slide - 1);
        
    };
    
    //Function to get the right amount of cards for each media query.
    const getVisibleCards = () => {
        if (window.innerWidth >= 1080) {
            return 3;
        } else if (window.innerWidth >= 700) {
            return 2; 
        }
        return 1; 
    };

    const visibleCards = getVisibleCards();

    const visibleCourses = coursesArray.slice(slide, slide + visibleCards);

    return (
        <>
            <div className="carousel">
                <img
                    src={coursesItems.arrow}
                    alt={coursesItems.leftArrowTextAlt}
                    className="arrow arrow-left"
                    onClick={prevSlide}
                />
                {visibleCourses.map((course, id) => {
                    return (
                        <div
                            key={course.id}
                            className="course-card"
                            // className={
                            //     slide === id
                            //         ? "course-card"
                            //         : "course-card slide-hidden"
                            // }
                        >
                            <img
                                className="course-image"
                                src={course.imageUrl}
                                alt={course.imgageAlt}
                            />
                            <p>{course.text}</p>
                            <p className="p-bold">{course.shortDescription}</p>
                            <p className="p-bold">{course.startDatePrice}</p>
                            <div className="btn-container">
                            <Button>Book your spot</Button>
                            </div>
                        </div>
                    );
                })}
                <img
                    src={coursesItems.arrow}
                    alt={coursesItems.rightArrowTextAlt}
                    className="arrow arrow-right"
                    onClick={nextSlide}
                />
                <span className="indicators">
                    {coursesArray.map((_, id) => {
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
