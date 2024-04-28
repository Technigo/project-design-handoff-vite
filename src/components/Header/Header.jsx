import { Booking } from "./Booking"
import { Top } from "./Top"

export const Header = () => {
  return (
    <div className="top-0 mb-20 w-full h-screen flex flex-col box-border bg-cover bg-center bg-no-repeat" style={{       
      backgroundImage: `url('/assets/main-image.svg')`, 
    }}>
      <Top />
      <div className="absolute bottom-1/2 left-1/4">
        <Booking />
      </div>
      
      
    </div>
  )
}