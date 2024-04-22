import { Header } from "./Header"
import { FindUsButton } from "./Button"

export const HeroSection = () => {
  return (
    <div className='bg-hero-image bg-cover bg-center h-[340px] -z-10'>
      <div className='bg-dkpurple/50 z-0 h-[340px]'>
        <Header />
        <div className='flex flex-col text-center justify-center items-center '>
          <h1 className='mt-6 text-2xl md:text-2xl lg:text-4xl'>
            The Zumba Hall
          </h1>
          <p className='mt-1 mb-3 mx-[24px] md:mt-2 md:text-base lg:mt-5'>
            Join our training centre and get fit through{" "}
            <span className='text-[#F6E53C] italic md:text-base'>Dance</span>
            <span className='italic md:text-base'>!</span>
          </p>
          <FindUsButton />
        </div>
      </div>
    </div>
  )
}
