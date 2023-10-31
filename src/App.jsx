import { BrowserRouter, Routes } from "react-router-dom";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  )
};
