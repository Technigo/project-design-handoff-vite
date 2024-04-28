import PropTypes from "prop-types"

export const ButtonFAQ = ({ text }) => {
  return (
    <button className="font-montserrat bg-green hover:bg-green-hover active:bg-green-click rounded-full w-32 h-10 tablet:w-36 tablet:h-14 desktop:text-xl desktop:p-2.5 desktop:w-60 desktop:h-16">
      {text}
    </button>
  )
}

ButtonFAQ.propTypes = {
  text: PropTypes.string.isRequired,
}
