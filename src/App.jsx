import "./index.css"
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

export const App = () => {
  return (
    <>
    <BrowserRouter>
       <div className="wrapper">
       <Routes>{routes}</Routes>
      </div>
   </BrowserRouter>
   </>
  )
};
