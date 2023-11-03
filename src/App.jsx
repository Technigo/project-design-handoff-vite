//Entry point
//Importing necessary modules from react-router-dom and local files
import { Routes, BrowserRouter } from "react-router-dom";
import "./index.css"
import { routes } from "./routes/routes"


// App component responsible for rendering the application. BrowserRouter to enable routing
export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
};
