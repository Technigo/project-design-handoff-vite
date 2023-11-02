

import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";



export const App = () => {
  return (
    <div className="app-wrapper">
     <BrowserRouter>
      <Header />
          <Routes>
            {routes}
          </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
};
