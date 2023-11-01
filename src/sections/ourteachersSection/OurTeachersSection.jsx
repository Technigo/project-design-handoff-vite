import "./ourteachers.css";
import { useTranslation } from "react-i18next";
import doubleyoga from "../../assets/doubleyoga.svg";
import wave3 from "../../assets/wave-3.svg";

export const OurTeachersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="ourTeachers-container">
      <h2 className="ourTeachers-title">{t("ourTeachersTitle")}</h2>
      <p className="ourTeachers-info">{t("ourTeachersInfo")}</p>
      <button className="meetTeachersBtn">{t("meetOurTeachersBtn")}</button>
      <img src={doubleyoga} alt="two girls laughing during yoga" />
      <img src={wave3} alt="wave pattern" className="teachers-wave" />
    </div>
  );
};
