import { Header } from "../Sections/Header";
import { BigHeadings } from "../Components/BigHeadings";
import { ContactForm } from "../Sections/ContactForm";
import { SocialMedia } from "../Sections/SocialMedia";
import { Footer } from "../Sections/Footer";
import { LeftButton } from "../Components/LeftButton";

export const ContactUs = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <LeftButton />
        <BigHeadings />
        <ContactForm />
        <SocialMedia />
        <Footer />
    </div>
  )
}
