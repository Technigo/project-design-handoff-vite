import Navbar from "./Navbar";
import { Header } from "../sections/Header";
import { WorkshopList } from "../sections/WorkshopList";
import Booking from "../sections/Booking";
import Footer from "../sections/Footer";
import { Coaches } from "../sections/Coaches";
import { Stats } from "../sections/Stats";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Stats />
      <WorkshopList />
      <Coaches />
      <Booking />
      <Footer />
    </div>
  );
};
