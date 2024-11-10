import { Button } from "../styles/Button"
import { Heading } from "../typography/Heading"

export const Hero = () => {
  return (
    <section
      className="relative bg-[url(/assets/images/crossfit-hero.jpg)] p-40 bg-cover bg bg-no-repeat bg-center text-white flex flex-col lg:items-left justify-start md:justify-center lg:justify-center md:p-66"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>

      <div className="relative z-10 max-w-xs md:ml-20 lg:ml-20 flex flex-col justify-start">
        <Heading
          heading="h1"
          className="mt-11 text-h1-tab-mob lg:text-h1-desktop font-bold mb-6"
          text="fun, fabulous & fearless: crossfit for mums"
        />
        <Heading
          heading="h2"
          className="mb-6 text-h2-tab-mob font-sans"
          text="Ready for crossfit and cuddles? Join our small groups for amazing mums
          just like you."
        />

        <Button
          className={
            "join-btn text-join-btn text-white md:text-join-btn-tablet lg:text-join-btn-desktop bg-plum-light active:bg-deep-violet hover:bg-royal-purple text-button w-40 h-10"
          }
          label={"Join us!"}
        />
      </div>
    </section>
  )
}
