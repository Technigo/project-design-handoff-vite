import "./ourteachers.css";
import { useTranslation } from "react-i18next";
import doubleyoga from "../../assets/doubleyoga.svg";
import wave3mini from "../../assets/wave-3mini.svg";

export const OurTeachersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="ourTeachers-container">
      <div className="teacher-title-and-info">
        <h2 className="ourTeachers-title">{t("ourTeachersTitle")}</h2>
        <p className="ourTeachers-info">{t("ourTeachersInfo")}</p>
      </div>
      <button className="meetTeachersBtn">{t("meetOurTeachersBtn")}</button>
      <img
        src={doubleyoga}
        alt="two girls laughing during yoga"
        className="double-yoga"
      />
      <img src={wave3mini} alt="wave pattern" className="teachers-wave" />
    </div>
  );
};
