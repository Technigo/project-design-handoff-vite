import { CourseCarousel } from "./CourseCarousel"
import { useTranslation } from "react-i18next"
import "./Courses.css"

export const Courses = () => {

  const { t } = useTranslation()

  return (
    <section className="courses-section">
        <h2>{t("home.courses.heading")}</h2>
        <h3>{t("home.courses.subHeading")}</h3>
        <CourseCarousel />
    </section>
  )
}
