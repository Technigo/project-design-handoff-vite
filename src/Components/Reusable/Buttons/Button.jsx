/* eslint-disable react/prop-types */
import "./button.css"

export const Button = ({buttonText, buttonClass}) => {
  return (
    <button type="button" className={buttonClass}>{buttonText}</button>
  )
}
