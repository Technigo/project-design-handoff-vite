import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { Navbar } from "./Components.jsx/Navbar";
import { About } from "./Components.jsx/About";
import { Header } from "./Components.jsx/Header";
import { InfoPage } from "./Components.jsx/InfoPage";

export const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Header />
        <InfoPage />
      </div>
    </>
  );
};
