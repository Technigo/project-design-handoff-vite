import React from 'react'

import logo from "../../../public/Logotype.svg";

export const Nav = () => {
  return (
    <div className='nav-bar'>
        <img className="logo-img" src={logo} alt="Logo" />
        YogaBalance
        <img src="" alt="Search-icon" />
        <img src="" alt="Menu" />
    </div>
  )
}
