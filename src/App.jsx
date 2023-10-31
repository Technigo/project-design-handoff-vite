import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer>
          <Link to="/contact">Contact Us</Link>
        </Footer>
      </div>
    </BrowserRouter>
  );
};
