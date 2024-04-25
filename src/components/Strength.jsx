import strength1 from "/images/strength1.svg"
import strength2 from "/images/strength2.svg"
import strength3 from "/images/strength3.svg"

export const Strength = () => {
  return (
    <div>
      <div className='image-wrapper'>
        <img src={strength1} />
      </div>
      <div>
        <img src={strength2} />
      </div>
      <div>
        <img src={strength3} />
      </div>
    </div>
  )
}
