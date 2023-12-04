import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';

export const CardCourseCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenCount = React.Children.count(children);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1028) {
                setSlidesToShow(3);
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % childrenCount;
            console.log(`Next Slide Clicked: currentIndex=${currentIndex}, newIndex=${newIndex}`);
            return newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + childrenCount) % childrenCount;
            console.log(`Previous Slide Clicked: currentIndex=${currentIndex}, newIndex=${newIndex}`);
            return newIndex;
        });
    };

    const isSlideVisible = index => {
        return index >= currentIndex && index < currentIndex + slidesToShow;
    };

    const dotCount = Math.ceil(childrenCount / slidesToShow);

    return (
        <div className={styles.carouselContainer}>
            {(slidesToShow < 3) && (
                <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.left}`}>
                    <img src="/Images/swipeLeft.svg" alt="Previous" />
                </button>
            )}
            {React.Children.map(children, (child, index) => (
                <div
                    className={`${styles.carouselSlide} ${isSlideVisible(index) ? styles.active : ''}`}
                    key={index}
                    style={{ display: isSlideVisible(index) ? 'block' : 'none' }}
                >
                    {child}
                </div>
            ))}
            <div className={styles.dots}>
                {Array.from({ length: dotCount }, (_, idx) => (
                    <span
                        key={idx}
                        onClick={() => setCurrentIndex(idx * slidesToShow)}
                        className={`${styles.dot} ${Math.floor(currentIndex / slidesToShow) === idx ? styles.active : ''}`}
                    />
                ))}
            </div>
            {(slidesToShow < 3) && (
                <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.right}`}>
                    <img src="/Images/swipeRight.svg" alt="Next" />
                </button>
            )}
        </div>
    );
};
