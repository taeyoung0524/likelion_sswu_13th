import React from 'react'
import Menu from "../../assets/img/menu.png"
import Logo from "../../assets/img/logo.png"
import Search from "../../assets/img/search.png"
import ShoppingBag from "../../assets/img/shoppingBag.png"

const Nav = () => {
  return (
    <div className="container Nav">
      <div className="left">
        <img src={Menu} alt="" />
      </div>
      <div className="center">
        <img src={Logo} alt="" />
      </div>
      <div className="right">
        <img src={Search} alt="" />
        <img src={ShoppingBag} alt="" />
      </div>
    </div>
  )
}

export default Nav
