import "./ourteachers.css";
import { useTranslation } from "react-i18next";
import doubleyoga from "../../assets/doubleyoga.svg";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";

export const OurTeachersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="ourTeachers-container">
      <div className="teacher-title-and-info">
        <h2 className="ourTeachers-title">{t("ourTeachersTitle")}</h2>
        <p className="ourTeachers-info">{t("ourTeachersInfo")}</p>
      </div>
      <div
        style={{ maxWidth: "50%", alignSelf: "center", marginBottom: "36px" }}
      >
        <PrimaryBtn btnName={t("meetOurTeachersBtn")} />
      </div>
      <img
        src={doubleyoga}
        alt="two girls laughing during yoga"
        className="double-yoga"
      />
      <img src={wave3mini} alt="wave pattern" className="teachers-wave-mini" />
      <img
        src={wave3tablet}
        alt="wave pattern"
        className="teachers-wave-tablet"
      />
    </div>
  );
};
