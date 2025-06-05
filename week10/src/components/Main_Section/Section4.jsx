import React from 'react'
import Title from "../../assets/img/Sec4_title.png"
import Image1 from "../../assets/img/Sec4_img1.png"
import Image2 from "../../assets/img/Sec4_img2.png"

const Section4 = () => {
  return (
    <div className="container Section4">
      <div className="header">
        <img src={Title} alt="" />
      </div>
      <div className="img_container">
        <div className="box">
            <img src={Image1} alt="" />
            <div className="text_container">
                <h3>Harris Tweed Three Button<br/>Jacket</h3>
                <p>$120</p>
            </div>
        </div>
        <div className="box">
            <img src={Image2} alt="" />
            <div className="text_container">
                <h3>Harris Tweed Three Button<br/>Jacket</h3>
                <p>$120</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
