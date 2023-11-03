import { useTranslation } from 'react-i18next';
import { Button } from '../Links/Button';
import { useEffect, useState } from 'react';

// Component for the Subscribe section in the footer, here I have used a lot of code to manually create the subscribe input field. This could perhaps be made shorter by implementing the same React Forms as on the Contact page.
export const SubscribeSection = () => {
    const { t } = useTranslation();

    // States for the form
    const [submit, setSubmit] = useState(false); // Triggers useEffect
    const [emailInput, setEmailInput] = useState(""); // Captures the email on input change
    const [submittedEmail, setSubmittedEmail] = useState(""); // Captures the email on form submission
    const [emailValid, setEmailValid] = useState(true); // Validates the email on input change

    // Function to handle form submission
    const handleSubmitClick = () => {
        if (emailValid) {
            setSubmit(true); // Triggers useEffect
            setSubmittedEmail(emailInput); // Captures the email on form submission
            setEmailInput(""); // Clears the input field
        } else {
            alert("Please enter a valid email address.");
        }
    }

    // useEffect will run when submit is true and submittedEmail changes
    useEffect(() => {
        if (submit) {
            alert(`Thank you for subscribing! An email has been sent to ${submittedEmail}.`);
        }
    }, [submit, submittedEmail]);

    // Function to handle input change and validation of emailaddress
    const handleInputChange = (event) => {
        const email = event.target.value;
        setEmailInput(email); // Captures the email on input change
        setEmailValid(validateEmail(email)); // Validates the email on input change, sets emailValid to true or false
    }

    // Function to validate email address
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regex for email validation
        return regex.test(email); // Tests the email against the regex and returns true or false
    }

    return (
        <div className="subscribe-and-heading">
            <h2 className="footer-h2">{t("landingPage.footer.h2")}</h2>
            <div className="subscribe-input-fields">
                <form className="subscribe-form" action="https://httpbin.org/anything" method="post">
                    {/* There was no label in the sketch so I'll leave it commented out */}
                    {/* <label htmlFor="email">{t("landingPage.footer.label")}</label> */}
                    <input
                        type="email"
                        id="email"
                        placeholder={t("landingPage.footer.label")}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                        value={emailInput}
                        onChange={handleInputChange} />
                    <Button className={"green thin"} type="submit" text={t("landingPage.footer.button")} onClick={handleSubmitClick} />
                </form>
            </div>
        </div>
    )
}
