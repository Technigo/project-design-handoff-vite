import PropTypes from "prop-types"
import { Button } from "./Button"

export const CTA = ({ title, description, buttonText, showInput }) => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      {/* Banner */}
      <div className="bg-banner-phone w-full h-10 bg-repeat-x tablet:h-16 tablet:bg-banner-desktop" />
      {/* Text section start */}
      <div className="font-montserrat text-center tablet:w-96 tablet:mx-auto desktop:w-auto">
        {/* Title */}
        <h2 className="text-white text-2xl font-medium mt-16 tablet:pt-32 desktop:text-4xl">
          {title}
        </h2>
        {/* Paragraph */}
        <p className="text-white desktop:mt-2 desktop:mb-10 desktop:text-2xl">
          {description}
        </p>
        {/* Email input */}
        {showInput && (
          <input
            type="email"
            className="mt-4 rounded-full max-w-96 h-7 pl-4 placeholder-black placeholder-opacity-100 tablet:w-96"
            placeholder="Enter your e-mail address here."
            aria-label="Email address"
          />
        )}
        {/* Button */}
        <div className="mt-6 mb-16 tablet:mb-32">
          <Button buttonText={buttonText} />
        </div>
      </div>
      {/* Banner */}
      <div className="bg-banner-phone w-full h-10 object-cover bg-repeat-x transform rotate-180 tablet:h-16 tablet:bg-banner-desktop" />
    </div>
  )
}

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  showInput: PropTypes.func.isRequired,
}
