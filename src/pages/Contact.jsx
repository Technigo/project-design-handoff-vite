import { H2_Headline } from "../components/Typography/H2_Headline";
import "./contact.css";

export const Contact = () => {

  let headline_contact = "Welcome to contact us";
  return (
    <div className="contact-page-wrapper">
      <H2_Headline
        h2_headline={headline_contact}
      />
    </div>
  )
}
