import { Header } from "../Sections/Header";
import { BigHeadings } from "../Components/BigHeadings";
import { Articles } from "../Sections/Articles";
import { Footer } from "../Sections/Footer";

export const AboutUs = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <div className="left-icon">
            details for left icon here
        </div>
        <BigHeadings />
        <Articles />
        <Footer />
    </div>
  )
}
