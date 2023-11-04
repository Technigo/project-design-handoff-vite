import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./Components.jsx/Navbar";
import { About } from "./Components.jsx/About";
import { Header } from "./Components.jsx/Header";
import { InfoPage } from "./Components.jsx/InfoPage";
import { Footer } from "./Components.jsx/Footer";

export const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Header />
                    <InfoPage />
                  </>
                }
              />
              <Route path="about/" element={<About />} />
            </Routes>
          </main>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
};
