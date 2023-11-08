import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Header } from "../src/components/Header/Header";
import { Form } from "./components/Newsletter/Form";
import { Footer } from "../src/components/Footer/Footer";
import { ScrollToTop } from "./components/Footer/ScrollToTop";
import { BurgerMenu } from "./components/Header/BurgerMenu";

export const App = () => {
  return (
    <BrowserRouter>
      {/* The Routes component renders the defined routes in the application. 
           The 'routes' variable contains the route configuration. */}
      <Header />
      <BurgerMenu />
      <div
        className="main-wrapper"
        id="outer-container"
        style={{ height: "100%" }}
      >
        <main id="page-wrap">
          <ScrollToTop />
          <Routes>{routes}</Routes>
          <Form />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};
