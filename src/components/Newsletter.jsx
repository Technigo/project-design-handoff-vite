import { Button } from "./Button"

export const Newsletter = () => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      <img src="/banner-phone.png"/>
      <h2 className="text-white text-2xl font-medium mt-16">
        Newsletter</h2>
        <p className="text-white">
        Sign up & receive exclusive news about your club, campaigns and events!
      </p>
      <input className="rounded-full w-full" type="text" placeholder="Enter your e-mail address here."></input>
      <div className="mt-6 mb-16">
        <Button buttonText={"Subscribe"} />
      </div>
      <img src="/banner-phone.png" className="transform rotate-180" />
    </div>
  )
}
