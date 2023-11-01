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
          <div className={styles.coursesBox}>Course 1</div>
          <div className={styles.coursesBox}>Course 2</div>
        </div>
      </div>
      ;
    </>
  );
};
