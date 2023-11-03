import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Header } from "../src/components/Header/Header";
import { Form } from "./components/Newsletter/Form";
import { Footer } from "../src/components/Footer/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      {/* The Routes component renders the defined routes in the application. 
           The 'routes' variable contains the route configuration. */}
      <div className="main-wrapper">
        <Header />
        <Routes>{routes}</Routes>
        <Form />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
