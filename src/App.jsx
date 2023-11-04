import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/sections/Header";
import { Form } from "./components/sections/Form";
import { Footer } from "./components/sections/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <main className="main-wrapper">
          <Routes>{routes}</Routes>
        </main>
        <Form />
        <Footer />
      </BrowserRouter>
    </>
  );
};
