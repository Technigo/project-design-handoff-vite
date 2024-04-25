import { Button } from "./Button"

export const Newsletter = () => {
  return (
    <div className="border-t border-b mt-20 bg-off-black">
      <img src="/banner-tablet.png" />
      <div className="font-montserrat text-center px-4">
        <h2 className="text-white text-2xl font-medium mt-16">Newsletter</h2>
        <p className="text-white">
          Sign up & receive exclusive news about your club, campaigns and
          events!
        </p>
        <input
          type="email"
          className="mt-4 rounded-full w-full h-7 pl-4 placeholder-black placeholder-opacity-100"
          placeholder="Enter your e-mail address here."
          aria-label="Email address"
        />
        <div className="mt-4 mb-10">
          <Button buttonText={"Subscribe"} />
        </div>
      </div>
      <img src="/banner-tablet.png" className="transform rotate-180" />
    </div>
  )
}
