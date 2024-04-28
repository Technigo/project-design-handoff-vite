import PropTypes from "prop-types"

export const ReasonCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-60 mx-auto tablet:w-auto desktop:flex-row desktop:w-auto desktop:gap-10">
      <img
        className="w-12 h-12 self-center mb-6 tablet:self-start tablet:w-16 tablet:h-16"
        src={icon}
        alt="icon"></img>

      <div>
        <h3 className="text-xl font-medium self-start mb-4 desktop:text-2xl">
          {title}
        </h3>
        <p className="self-start tablet:text-lg	desktop:text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}

ReasonCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
