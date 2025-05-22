import React from 'react'
import Logo from "../../assets/img/image 7.png";
import Map from "../../assets/img/Vector (12).png"
import Search from "../../assets/img/search.png"
import Cart from "../../assets/img/cart.png"
import Person from "../../assets/img/person.png"

const Nav = () => {
  return (
    <div className="Nav_wrap">
      <img className = "Logo" src={Logo} alt="" />
      <ul>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
        <li>TENNIS</li>
        <li>BRAND</li>
      </ul>
      <div className="icon">
        <img src={Map} alt="" />
        <img src={Search} alt="" />
        <img src={Person} alt="" />
        <img src={Cart} alt="" />
      </div>
    </div>
  )
}

export default Nav
