import { CiMenuBurger } from "react-icons/ci"

export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 bg-off-black bg-opacity-30 px-4 py-2 z-50 lg:px-32">
        <div className="relative flex h-16 items-center justify-between">
          <img src="/logo.png" />
          <div className="hidden lg:flex">
            <ul className="flex lg:flex-row list-none justify-between gap-9 font-medium font-montserrat text-white">
              <li>First Timers</li>
              <li>Schedule</li>
              <li>Buy Sessions</li>
            </ul>
          </div>
          <div className="relative inline-flex items-center justify-center aria-controls=mobile-menu">
            <img className="pr-4" src="/account.png" />
            <CiMenuBurger className="text-5xl text-white" />
          </div>
        </div>
      </nav>
    </>
  )
}
