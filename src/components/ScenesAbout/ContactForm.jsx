import { useTranslation } from "react-i18next";
import { useState } from "react"
import { Button } from "../Button/Button";
import "./ContactForm.css";

export const ContactForm = () => {
    const { t } = useTranslation();


    //FUNCTIONS TO SAVE AND PRINT FORM DATA TO CONSOLE

    //declaring a useState hook to save user data. 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        agreeToTerms: false,
    });

   
    //takes the input event as argument, 
    const name = (e) => setFormData({...formData, name: e.target.value});
    const email = (e) => setFormData({...formData, email: e.target.value});
    const agreeToTerms = (e) => setFormData({...formData, agreeToTerms: e.target.value});

    const logData = () => {
        console.log("Form Data:", formData)
    }
    

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
                        value={formData.name}
                        onChange={name}
                        //placeholder={t("about.form.placeholders.name")}
                        required
                    />
                </label>
                <label className="label-text" htmlFor="email">
                    {t("about.form.labels.email")}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={email}
                        //placeholder={t("about.form.placeholders.email")}
                        required
                    />
                </label>

                <label className="checkbox-container" htmlFor="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        checked={formData.agreeToTerms}
                        onChange={agreeToTerms}
                        required
                    />
                    Terms and conditions
                </label>
                <div className="submit-btn-container">
                <Button onClick={logData} type="submit">{t("about.form.button")}</Button>
                </div>
            </form>
        </section>
    );
};
