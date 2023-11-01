export const ContactForm = ({ firstName, lastName, email, message, send }) => {
    return (
        <form action="" >
            {/* htmlFor represents the for="" used in regular html */}
            <label htmlFor="first-name">{firstName}</label>
            <input type="text" id="first-name" name="first-name" />
            <label htmlFor="last-name">{lastName}</label>
            <input type="text" id="last-name" name="last-name" />
            <label htmlFor="email">{email}</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">{message}</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">{send}</button>
        </form>
    )
}

