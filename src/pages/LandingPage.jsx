
import { Hero } from "../components/sections/Hero"
import { Schedule } from "../components/sections/Schedule";
import { Information } from "../components/sections/Information";
import { Form } from "../components/sections/Form";


export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Schedule/> 
      <Information />
      <Form />
    </>
  )
}
