import { Headings } from "./Headings";
import { ContactForm } from "./ContactForm";
import { useTranslation } from "react-i18next";
import "./contact.css";

export const ContactUs = () => {
    const { t } = useTranslation();
    return (
        <section className="contact-section">
            <Headings heading={t("aboutUs.contact.h2")} contactEmail={t("aboutUs.contact.contactEmail")} street={t("aboutUs.contact.address.street")} zip={t("aboutUs.contact.address.zip")} city={t("aboutUs.contact.address.city")} />
            <ContactForm firstName={t("aboutUs.contact.firstName")} lastName={t("aboutUs.contact.lastName")} email={t("aboutUs.contact.email")} message={t("aboutUs.contact.message")} send={t("aboutUs.contact.send")} />
        </section>
    )
}
