import { Header } from "./Header";
import { Testimonial } from "./Testimonial";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar"
import { JoinUs } from  './JoinUs'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonial />
      <JoinUs />
      <Footer />
    </>
  );
};
