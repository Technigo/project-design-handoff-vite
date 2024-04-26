import { Booking } from "./Booking"
import { Top } from "./Top"

export const Header = () => {
  return (
    <div className="top-0 mb-96 w-full flex flex-col" style={{       
      backgroundImage: `url('/assets/main-image.svg')`, backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      minHeight:'100vh',
    }}>
      <Top />
      <div className="absolute top-1/3 right-1/2">
        <Booking />
      </div>
    </div>
  )
}
