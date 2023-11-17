import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";




export const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>

  )



};
