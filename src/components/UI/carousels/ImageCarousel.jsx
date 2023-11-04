import React, { useState } from 'react';
import styles from './ImageCarousel.module.css';

export const CardCourseCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenCount = React.Children.count(children);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= childrenCount) {
                newIndex = 0;
            }
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = childrenCount - 1;
            }
            return newIndex;
        });
    };


    const isSlideActive = (index) => {
        let isActive = index === currentIndex;
        if (window.innerWidth >= 768) {
            isActive = isActive || index === (currentIndex + 1) % childrenCount;
        }
        return isActive;
    };

    return (
        <div className={styles.carouselContainer}>
            <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.left}`}>
                <img src="/Images/swipeLeft.svg" alt="Previous" />
            </button>

            {React.Children.map(children, (child, index) => (
                <div
                    className={`${styles.carouselSlide} ${isSlideActive(index) ? styles.active : ''}`}
                    key={index}
                >
                    {child}
                </div>
            ))}
            <div className={styles.dots}>
                {React.Children.map(children, (child, index) => (
                    <div className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}></div>
                ))}
            </div>

            <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.right}`}>
                <img src="/Images/swipeRight.svg" alt="Next" />
            </button>
        </div>
    );
};
