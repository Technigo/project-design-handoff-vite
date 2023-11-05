import { BrowserRouter, Routes } from "react-router-dom";
import routing from "./Routes/Routes";

export const App = () => {

  return (
    <>
    <BrowserRouter>
    <main>
      <Routes>{routing}</Routes>
    </main>
    </BrowserRouter>
    </>
  )
}