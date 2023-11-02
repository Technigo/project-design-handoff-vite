import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/sections/Header";
import { Form } from "./components/sections/Form"
import { Footer } from "./components/sections/Footer";
import { TranslationComponent } from "./components/TranslationComponent";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="main-wrapper">
          <Header />
          <Routes>{routes}</Routes>
        </main>
        <Form/>
        <Footer />
        <TranslationComponent/>
      </BrowserRouter>
    </>
  );
};
