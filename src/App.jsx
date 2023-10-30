import { BrowserRouter, Routes } from "react-router-dom";
import { routing } from "./routes/routing";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>{routing}</Routes>
    </BrowserRouter>
  );
};
