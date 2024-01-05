import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";

import "./index.css";

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
