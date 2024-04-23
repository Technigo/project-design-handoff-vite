import "./Header.css"
import { MainImage } from "./MainImage"
import { Top } from "./Top"

export const Header = () => {
  return (
    <div className = "header-container">
      <MainImage />
      <Top />
    </div>
  )
}
