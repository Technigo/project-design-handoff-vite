import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./ContactFOrm.css";

export const ContactForm = () => {
    const { t } = useTranslation();
    return (
        <section id="contact-section" className="contact-section">
            <h2>{t("about.form.heading")}</h2>
            <form>
                <label className="label-text" htmlFor="name">
                    {t("about.form.labels.name")}
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={t("about.form.placeholders.name")}
                        required
                    />
                </label>
                <label className="label-text" htmlFor="email">
                    {t("about.form.labels.email")}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={t("about.form.placeholders.email")}
                        required
                    />
                </label>

                <label className="checkbox-container" htmlFor="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        value="false"
                        required
                    />
                    Terms and conditions
                </label>

                <Button type="submit">{t("about.form.button")}</Button>
            </form>
        </section>
    );
};
