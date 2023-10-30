import { BrowserRouter, Link, Routes, NavLink } from "react-router-dom";
import { routes } from "./routes/routes";

// Set up the routing and display the navigation links
export const App = () => {
  return (
    // Wrapping the entire app with BrowserRouter to enable client-side routing
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              {/* Link component for navigation to the Home page */}
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              {/* NavLink components for navigation to the About us and Contact us pages. They will have an "active" class when the path matches "/about" or "/contact" */}
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="app-li">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* Defining the routes for the application */}
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  )
  
};
