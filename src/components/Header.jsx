import LogoWhiteMobile from "../assets/Logo-white-TabletMobile1.svg"
import MenuIconMobile from "../assets/Menu-mobile.svg"

export const Header = () => {
  return (
    <div className='flex justify-between pt-1 mx-[24px]'>
      <img
        src={LogoWhiteMobile}
        alt='Logo of the zumba hall'
      />
      <img
        src={MenuIconMobile}
        alt='Hamburger Menu Icon'
      />
    </div>
  )
}
