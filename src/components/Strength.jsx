import strength1 from "/images/strength1.svg"
import strength2 from "/images/strength2.svg"
import strength3 from "/images/strength3.svg"

export const Strength = () => {
  return (
    <section className="flex flex-col justify-center p-2 gap-2 mx-3 tablet:mx-8 desktop:*:mx-36 font-Inter">
      <div className="">
        <img className="float-left mr-4 max-w-[150px] md:max-w-[350px] lg:max-w-[600px]" src={strength1} />
        <h2 className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Build strength - loose stress</h2>
        <p className="text-base tablet:text-xl desktop:text2xl">Physically demanding while soothing your soul, Ashtanga yoga is the premium choice.</p>
      </div>
      <div className="">
        <img className="float-left mr-4 max-w-[150px] md:max-w-[350px] lg:max-w-[600px]" src={strength2} />
        <h2 className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Close to where you are</h2>
        <p className="text-base tablet:text-xl desktop:text2xl">With over 50 locations all over the city, we made it easy for you to exercise.</p>
      </div>
      <div>
        <img className="float-left mr-4 max-w-[150px] md:max-w-[350px] lg:max-w-[600px]" src={strength3} />
        <h2 className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Flexible schedules</h2>
        <p className="text-base tablet:text-xl desktop:text2xl">We believe in easy access yoga classes. Drop-in or schedule ahead. Sign up or on the go.</p>
      </div>
    </section>
  )
}
