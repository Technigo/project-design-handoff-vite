
import { Hero } from "../components/sections/Hero"
import { Schedule } from "../components/sections/Schedule";
import { Information } from "../components/sections/Information";
import { Activities } from "../components/sections/Activities"


export const HomePage = () => {
  return (
    <>
      <Hero />
      <Schedule/> 
      <Information />
      <Activities /> 
    </>
  )
}
