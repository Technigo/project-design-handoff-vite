import "./Contact.css";
import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="page-wrapper">
        <div className="contact-info">
          <SectionTitle
            className="contact-title"
            title={t("aboutPage.contact.title")}
          />
          <p>{t("aboutPage.contact.p")}</p>
        </div>
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="">{t("aboutPage.contact.form.name")}</label>
            <input
              class="input-box"
              type="text"
              placeholder={t("aboutPage.contact.form.placeholder.one")}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">{t("aboutPage.contact.form.email")}</label>
            <input
              class="input-box"
              type="text"
              placeholder={t("aboutPage.contact.form.placeholder.two")}
            />
          </div>
          <button className="form-btn">
            {t("aboutPage.contact.form.btn")}
          </button>
        </form>
      </div>
    </section>
  );
};
