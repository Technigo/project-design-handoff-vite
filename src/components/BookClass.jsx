import { Button } from "./reusable/Button"

export const BookClass = () => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      <img src="/banner-tablet.png"></img>
      <h2 className="text-white text-2xl font-medium mt-16">
        Looking for a Challenge?
      </h2>
      <p className="text-white">Save your spot for the next class now!</p>
      <div className="mt-6 mb-16">
        <Button buttonText={"Book Now"} />
      </div>
      <div>
        <img src="/banner-tablet.png" className="transform rotate-180" />
      </div>
    </div>
  )
}
