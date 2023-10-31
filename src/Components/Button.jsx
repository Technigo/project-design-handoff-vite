/* eslint-disable react/prop-types */


export const Button = ({label, size}) => {
  return (
    <div>
        <button className={`join-btn ${size}`}>{label}</button>
    </div>
  )
}
