import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
