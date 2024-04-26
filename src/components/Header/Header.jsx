import { Booking } from "./Booking"
import "./Header.css"
import { MainImage } from "./MainImage"
import { Top } from "./Top"

export const Header = () => {
  return (
    <div className = "sticky top-0 w-full">
      <MainImage />
      <Top />
      <Booking />
    </div>
  )
}
