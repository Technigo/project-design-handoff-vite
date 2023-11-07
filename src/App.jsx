
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";


export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
