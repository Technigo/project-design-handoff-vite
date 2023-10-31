import { Header } from "../Sections/Header";
import { Headings } from "../Components/Headings";
import { ContactForm } from "../Sections/ContactForm";
import { SocialMedia } from "../Sections/SocialMedia";
import { Footer } from "../Sections/Footer";
import { LeftButton } from "../Components/LeftButton";

export const ContactUs = () => {
  const sectionId = 6;
  
  return (
    <div className="main-wrapper">
        <Header />
        <LeftButton />
        <Headings sectionId={sectionId}/>
        <ContactForm />
        <SocialMedia />
        <Footer />
    </div>
  )
}
