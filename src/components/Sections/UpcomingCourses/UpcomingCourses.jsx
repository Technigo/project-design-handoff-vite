import styles from "./UpcomingCourses.module.css";

export const UpcomingCourses = () => {
  return (
    <>
      <div className={styles.coursesSection}>
        <h2 className={styles.coursesHeading}>Upcoming Courses</h2>
        <div className={styles.coursesContainer}>
          <div className={styles.coursesBox}>
            <img src="/assets/pregs-courses.png" />
          </div>
          <div className={styles.coursesBox}>
            Course 1
            <p>Just want to add some text here to check the formatting, yey!</p>
            <p>this is some info for Course One.</p>
          </div>
          <div className={styles.coursesBox}>
            Course 2
            <p>Just want to add some text here to check the formatting, yey!</p>
            <p>this is some info for Course Two.</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
