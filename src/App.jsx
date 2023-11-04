

import { BrowserRouter, Routes } from "react-router-dom";
import { ScrollToTop } from "./Components/Reusable/ScrollToTop";
import { routes } from "./Routes/routes";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";



export const App = () => {
  return (
    <div className="app-wrapper">
     <BrowserRouter>
      <Header />
      <ScrollToTop />
          <Routes>
            {routes}
          </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
};
