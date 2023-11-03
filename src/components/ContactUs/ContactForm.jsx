// import { Button } from "../Links/Button";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./contact.css";

// Component for the Contact form
export const ContactForm = ({ firstName, lastName, email, message }) => {
    const { t } = useTranslation();

    // Destructuring the necessary methods from the useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // Renders the form, the register method is used to register the inputs and the handleSubmit method is used to handle the submit event. You can see the submitted data in the console.
    return (
        <form className="contact-form" onSubmit={handleSubmit((data) => { console.log(data) })} >
            <div className="input-label-group first-name">
                <label htmlFor="first-name">{firstName}*</label>
                <input type="text" id="first-name" {...register("firstName", { required: "This field is required" })} />
                {/* Renders an error message with the message from the required attribute in the input above */}
                <p className="error-msg"><i>{errors.firstName?.message}</i></p>
            </div>
            <div className="input-label-group last-name">
                <label htmlFor="last-name">{lastName}*</label>
                <input type="text" id="last-name" {...register("lastName", { required: "This field is required" })} />
                {/* Renders an error message with the message from the required attribute in the input above */}
                <p className="error-msg"><i>{errors.lastName?.message}</i></p>
            </div>
            <div className="input-label-group">
                <label htmlFor="email">{email}</label>
                <input type="email" id="email" {...register("email")} />
            </div>
            <div className="input-label-group">
                <label htmlFor="message">{message}</label>
                <textarea name="message" id="message" {...register("message")}></textarea>
            </div>

            <input
                className="btn-style green thick"
                type="submit"
                value={t("aboutUs.contact.send")}
                // Here I'm using inline styles to change the styling on the input, to override the default styling from Tailwind
                style={{
                    backgroundColor: "#233B35",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 14,
                    paddingBottom: 14,
                    paddingLeft: 26,
                    paddingRight: 26,
                    transition: "background-color 0.3s", // Add a transition for a smooth hover effect
                }}
                onMouseEnter={(event) => {
                    // Changes the background color on hover
                    event.target.style.backgroundColor = "#90562E";
                }}
                onMouseLeave={(event) => {
                    // Restores the original background color when the mouse leaves
                    event.target.style.backgroundColor = "#233B35";
                }}
            />
        </form >

    )
}