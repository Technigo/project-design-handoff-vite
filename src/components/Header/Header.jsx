// import { Navigation } from "./Navigation"
// import { Menu } from "./Menu"
// import { Button } from "../../ui/Button"
import "./Header.css"
import { Typography } from "../../ui/Typography"
import witch from "../../assets/Witch.png"


export const Header = () => {
  const title = "Daily spells"
  const bodyText = "Your go-to guide for everyday magic."

  return (
    <header>
      {/* <Navigation /> */}
      {/* <Menu /> */}
      <img src={witch} alt="Witch Image" className="witch" />
      {/* Heading 1 */}
      <Typography typography={title} level={1} className="heading" />

      {/* Body Text */}
      <Typography typography={bodyText} level={3} className="body-text" />
      {/* <Button /> */}
    </header>
  )
}

