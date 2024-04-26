import "./Booking.css"

export const Booking = () => {
  return (
    <div className="booking-system w-fit-content flex flex-col items-start absolute top-30 left-20 gap-10 text-darkblue z-3">
      <h1 className="power m-0 font-Roboto font-semibold text-3xl lg:text-4xl xl:text-5xl">Find your power</h1>
      <h3 className="anywhere anywhere m-0 font-roboto text-lg lg:text-xl">Anywhere. Anytime.</h3>
      <button className="booking booking py-2 px-4 bg-darkblue text-white rounded-full font-roboto font-semibold text-base lg:text-lg xl:text-xl">Book now</button>
    </div>
  )
}
