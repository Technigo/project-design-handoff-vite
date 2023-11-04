import React, { useState, useEffect } from 'react';
import styles from './ImageCarousel.module.css';

export const CardCourseCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenCount = React.Children.count(children);
    const [slidesToShow, setSlidesToShow] = useState(1);

    // slides to show updtaed based on screen size
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3); // For desktop
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2); // For tablet
            } else {
                setSlidesToShow(1); // For mobil
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Kjør ved montering for å sette riktig initiell verdi
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex + slidesToShow - 1 >= childrenCount) {
                newIndex = 0;
            }
            return newIndex;
        });
    };

    //Design does not have a back btn in tablet, should I remove it?
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = childrenCount - slidesToShow;
            }
            return newIndex;
        });
    };

    return (
        <div className={styles.carouselContainer}>
            <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.left}`}>
                <img src="/Images/swipeLeft.svg" alt="Previous" />
            </button>
            {React.Children.map(children, (child, index) => (
                <div
                    className={`${styles.carouselSlide} ${index >= currentIndex && index < currentIndex + slidesToShow ? styles.active : ''}`}
                    key={index}
                >
                    {child}
                </div>
            ))}
            <div className={styles.dots}>
                {Array.from({ length: childrenCount }, (_, idx) => (
                    <span
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`${styles.dot} ${currentIndex === idx ? styles.active : ''}`}
                    />
                ))}
            </div>
            <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.right}`}>
                <img src="/Images/swipeRight.svg" alt="Next" />
            </button>
        </div>
    );
};
