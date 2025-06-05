import React from 'react'
import Brand from "../../assets/img/Brand.png"
import Title from "../../assets/img/Sec3_title.png"
import Image1 from "../../assets/img/Sec3_img1.png"
import Image2 from "../../assets/img/Sec3_img2.png"
import Video1 from "../../assets/img/Sec3_video.png"


const Section3 = () => {
  return (
    <div className="container Section3">
      <img src={Brand} alt="" />
      <div className="collections">
        <img className="title"src={Title} alt="" />
        <img className="img1" src={Image1} alt="" />
        <img className="img2" src={Image2} alt="" />
        <img className="video" src={Video1} alt="" />
      </div>
    </div>
  )
}

export default Section3
