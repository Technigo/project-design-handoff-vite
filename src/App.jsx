import { Routes, BrowserRouter } from "react-router-dom";
import "./index.css"
import { routes } from "./routes/routes"


export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
