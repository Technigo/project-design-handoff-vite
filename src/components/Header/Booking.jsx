import "./Booking.css"

export const Booking = () => {
  return (
    <div className="w-fit-content flex flex-col items-start text-darkblue z-3">
      <div>
        <h1 className="mb-4 font-Roboto font-semibold text-3xl lg:text-4xl xl:text-5xl">Find your power</h1>

        <h3 className="mb-5 font-roboto text-3xl">Anywhere. Anytime.</h3>
        
        <button className="py-2 px-4 bg-darkblue text-white rounded-full font-roboto font-semibold text-base lg:text-lg xl:text-xl">Book now</button>
      </div>
    </div>
  )
}
