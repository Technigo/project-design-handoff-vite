import PropTypes from "prop-types"
import { Button } from "./Button"

export const CTA = ({ title, description, buttonText, showInput }) => {
  return (
    <div className="font-montserrat border-b border-t bg-off-black text-center">
      {/* Banner */}
      <div className="bg-banner-phone w-full h-10 bg-repeat-x tablet:h-16 tablet:bg-banner-desktop" />
      {/* Div for the whole text section including button */}
      <div className="font-montserrat text-center mt-20 mb-20 tablet:mt-32 tablet:mb-32 tablet:w-96 tablet:mx-auto desktop:mt-36 desktop:mb-36 desktop:w-auto">
        {/* Title */}
        <h2 className="text-white text-2xl font-medium tablet:mb-2 desktop:text-4xl">
          {title}
        </h2>
        {/* Paragraph */}
        <p className="text-white mb-4 max-w-96 mx-auto tablet:mb-8 desktop:mb-10 desktop:text-2xl desktop:max-w-full">
          {description}
        </p>
        {/* Email input */}
        {showInput && (
          <input
            type="email"
            className="rounded-full w-80 h-7 pl-4 placeholder-black placeholder-opacity-100 mb-4 tablet:w-96"
            placeholder="Enter your e-mail address here."
            aria-label="Email address"
          />
        )}
        {/* Button */}
        <div className="">
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
