import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>{routes}</Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};
