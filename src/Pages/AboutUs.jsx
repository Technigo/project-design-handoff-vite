import { Header } from "../Sections/Header";
import { BigHeadings } from "../Components/BigHeadings";
import { Articles } from "../Sections/Articles";
import { Footer } from "../Sections/Footer";
import { LeftButton } from "../Components/LeftButton";

export const AboutUs = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <LeftButton />
        <BigHeadings />
        <Articles />
        <Footer />
    </div>
  )
}
