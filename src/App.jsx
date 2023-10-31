import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom"; // Import Outlet
import { Navigation } from "./NavigationComponents/Navigation";
import { Header } from "./HeaderComponents/Header";
import { Grid } from "./GridComponents/Grid";
import { Info } from "./InfoComponents/Info";
import { Member } from "./Member/Member";
import { Footer } from "./Footer/Footer";
import { About } from "./AboutComponents/About";

export const App = () => {
  return (
    <>
      <div className="m-35">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navigation />
                  <Header />
                  <Grid />
                  <Info />
                  <Member />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
