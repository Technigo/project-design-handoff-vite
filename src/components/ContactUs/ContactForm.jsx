import { Button } from "../Links/Button";

export const ContactForm = ({ firstName, lastName, email, message, send }) => {


    return (
        <form className="contact-form" action="https://httpbin.org/anything" method="post" >
            {/* htmlFor represents the for="" used in regular html */}
            <div className="input-label-group first-name">
                <label htmlFor="first-name">{firstName}*</label>
                <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="input-label-group last-name">
                <label htmlFor="last-name">{lastName}*</label>
                <input type="text" id="last-name" name="last-name" required />
            </div>
            <div className="input-label-group">
                <label htmlFor="email">{email}</label>
                <input type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
            </div>
            <div className="input-label-group">
                <label htmlFor="message">{message}</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <Button className={"green thick"} type="submit" text={send} />
        </form>
    )
}

