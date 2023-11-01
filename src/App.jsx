import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main className="main-wrapper">
          <Header />
          <Routes>{routes}</Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
