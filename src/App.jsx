import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/sections/Header";
import { Form } from "./components/sections/Form"
import { Footer } from "./components/sections/Footer";
import { TranslationComponent } from "./components/translations/TranslationComponent"

export const App = () => {
  return (
    <>
      <BrowserRouter>
     
        <main className="main-wrapper">
          <TranslationComponent/>
          <Header />
          <Routes>{routes}</Routes>
          <Form/>
          <Footer />
        </main>
        
       
      </BrowserRouter>
    </>
  );
};
