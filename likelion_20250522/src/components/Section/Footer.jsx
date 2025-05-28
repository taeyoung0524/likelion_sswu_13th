import React from 'react'
import FILA from "../../assets/img/image 13.png"
import FooterImg from "../../assets/img/footer.png"

const Footer = () => {
  return (
    <div className="footer_container">
      <img className="FILA_logo" src={FILA} alt="" />
      <img className="footer_img" src={FooterImg} alt="" />
    </div>
  )
}

export default Footer