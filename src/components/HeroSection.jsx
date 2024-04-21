import { Header } from "./Header"
import { FindUsButton } from "./Button"

export const HeroSection = () => {
  return (
    <>
      <Header />
      <img
        className=''
        src='src/assets/woman-dancing.jpg'
        alt='woman dancing'
      />
      <div className='flex flex-col text-center'>
        <h1 className='text-2xl md:text-2xl lg:text-4xl'>The Zumba Hall</h1>
        <p className='mt-1 md:mt-2 md:text-base lg:mt-5'>
          Join our training centre and get fit through{" "}
          <span className='text-[#F6E53C] italic md:text-base'>Dance</span>
          <span className='italic md:text-base'>!</span>
        </p>
        <FindUsButton />
      </div>
    </>
  )
}
