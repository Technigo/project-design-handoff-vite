import { Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    // BrowserRouter is a wrapper component that makes the routing work
    <BrowserRouter>
      <main>
        {/* Gets the defined routes from the routes-file and mounts them using Routes from React Router Dom */}
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
