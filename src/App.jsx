import { Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BackArrow } from "./components/Header/BackArrow";
import { ScrollToTop } from "./components/Header/ScrollToTop";

export const App = () => {

  return (
    // BrowserRouter is a wrapper component that makes the routing work
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <BackArrow />
      <main>
        {/* Gets the defined routes from the routes-file and mounts them using Routes from React Router Dom */}
        <Routes>{routes}</Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
