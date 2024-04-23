import { Button } from "./Button"

export const Newsletter = () => {
  return (
    <div>
      <img src="/banner-phone.png"></img>
      <h2>Newsletter</h2>
      <p>
        Sign up & receive exclusive news about your club, campaigns and events!
      </p>
      <input type="text"></input>
      <Button buttonText={"Subscribe"} />
      <img src="/banner-phone.png"></img>
    </div>
  )
}
