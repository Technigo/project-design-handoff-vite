// routes.js
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Information} from "../pages/Information";
import { ContactForm } from "../pages/ContactForm"

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/information/*" element={<Information />} />
    <Route path="contact-form" element={<ContactForm />} /> 

  </>
);

export default routes;