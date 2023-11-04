import { Button } from "./Button"


export const HeroSec = () => {
  return (
    <div className="hero">
        <img className="hero-img" src="/Vector copy.png" alt="hero-image" />
        <img className="hero-desk" src="/Property 1=Variant2.png" alt="hero" />
        <div className="desc-hero">
           <p className="hero-text">GETTING STARTED</p>
           <p className="welcome-hero">WELCOME TO FIT4LIFE CROSSFIT</p>
           <Button label={"JOIN US TODAY!"} size="big"/>

        </div>
       

    </div>
  )
}
