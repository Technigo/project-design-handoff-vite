import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";
import i18n from "../i18n";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>{routing}</Routes>
    </BrowserRouter>
  );
};
