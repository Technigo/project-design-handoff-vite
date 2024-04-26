import { Booking } from "./Booking"
import "./Header.css"
import { MainImage } from "./MainImage"
import { Top } from "./Top"

export const Header = () => {
  return (
    <div className = "header-container mb-96 top-0">
      <MainImage />
      <Top />
      <Booking />
    </div>
  )
}
