import "./index.css"
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n instance

export const App = () => {
  return (
    <>
    <I18nextProvider i18n={i18n}>
    <BrowserRouter>
       <div className="wrapper">
       <Routes>{routes}</Routes>
      </div>
   </BrowserRouter>
   </I18nextProvider>
   </>
  );
};
