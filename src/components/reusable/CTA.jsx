import PropTypes from "prop-types"
import { Button } from "./Button"

export const CTA = ({ title, description, buttonText, showInput }) => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      <img src="/banner-tablet.png" />
      <h2 className=""></h2>
      <h2 className="text-white text-2xl font-medium mt-16">{title}</h2>
      <p className="text-white">{description}</p>
      {showInput && (
        <input
          type="email"
          className="mt-4 rounded-full w-full h-7 pl-4 placeholder-black placeholder-opacity-100"
          placeholder="Enter your e-mail address here."
          aria-label="Email address"
        />
      )}
      <div className="mt-6 mb-16">
        <Button buttonText={buttonText} />
      </div>
      <div>
        <img src="/banner-tablet.png" className="transform rotate-180" />
      </div>
    </div>
  )
}

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  showInput: PropTypes.func.isRequired,
}
