import Navbar from "./Navbar";
import Header from "../sections/Header";
import { WorkshopList } from "../sections/WorkshopList";
import Booking from "../sections/Booking";
import Footer from "../sections/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WorkshopList />
      <Booking />
      <Footer />
    </div>
  );
};
