import { Article } from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info-text/Info";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/"> <img src="./home.svg" alt="Home" /></Link>
            </li>
            <li className="app-li">
              <Link to=""><img src="./calendar.svg" alt="Home" /></Link>
            </li>
            <li className="app-li">
              <Link to="/information"><img src="./info.svg" alt="Home" /></Link>
            </li>
            <li className="app-li">
              <Link to=""><img src="./contact.svg" alt="Home" /></Link>
            </li>
          </ul>
        </nav>
      <Routes>{routes}</Routes>
      </BrowserRouter>
      <Header />
      <Info />
      <Article />
      <Footer />
    
    </>

  )
  

 
};
