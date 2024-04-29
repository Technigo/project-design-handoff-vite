import strength1 from "/images/strength1.svg"
import strength2 from "/images/strength2.svg"
import strength3 from "/images/strength3.svg"

export const Strength = () => {
  return (
    <section className="flex flex-col justify-center p-2 gap-4 desktop:gap-8 mx-2 tablet:mx-8 desktop:mx-s-150 font-Inter mb-16 desktop:mb-32">
      <div>
      <a href="/"><img className="float-left mr-4 desktop:mr-8 max-w-[120px] md:max-w-[350px] lg:max-w-[600px]" src={strength1} alt="Build strength - lose stress" /></a>
        <h2><a href="/" className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Build strength - lose stress</a></h2>
        <p className="text-base tablet:text-xl desktop:text2xl overflow-auto">Physically demanding while soothing your soul, Ashtanga yoga is the premium choice.</p>
      </div>
      <div>
      <a href="/"><img className="float-left mr-4 desktop:mr-8 max-w-[120px] md:max-w-[350px] lg:max-w-[600px]" src={strength2} alt=" Close to where you are" /></a>
        <h2><a href="/" className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Close to where you are</a></h2>
        <p className="text-base tablet:text-xl desktop:text2xl overflow-auto">With over 50 locations all over the city, we made it easy for you to exercise.</p>
      </div>
      <div>
        <a href="/"><img className="float-left mr-4 desktop:mr-8 max-w-[120px] md:max-w-[350px] lg:max-w-[600px]" src={strength3} alt="Flexible schedules" /></a>
        <h2><a href="/" className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">Flexible schedules</a></h2>
        <p className="text-base tablet:text-xl desktop:text2xl overflow-auto">We believe in easy access yoga classes. Drop-in or schedule ahead. Sign up or on the go.</p>
      </div>
    </section>
  )
}
