import { Header } from "../Sections/Header";
import { Headings } from "../Components/Headings";
import { Articles } from "../Sections/Articles";
import { Footer } from "../Sections/Footer";
import { LeftButton } from "../Components/LeftButton";

export const AboutUs = () => {
  const sectionId = 5;

  return (
    <div className="main-wrapper">
        <Header />
        <LeftButton />
        <Headings sectionId={sectionId}/>
        <Articles />
        <Footer />
    </div>
  )
}
