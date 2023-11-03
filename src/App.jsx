import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

// Set up the routing and display the navigation links
export const App = () => {
  return (
    // Wrapping the entire app with BrowserRouter to enable client-side routing
    <>
      <BrowserRouter>
        {/* Defining the routes for the application */}
        <AppRoutes />
      </BrowserRouter>
    </>
  )
};
