import { Booking } from "./Booking"
import "./Header.css"
import { MainImage } from "./MainImage"
import { Top } from "./Top"

export const Header = () => {
  return (
    <>
      <MainImage />
      <Top />
      <Booking />
    </>
  )
}
