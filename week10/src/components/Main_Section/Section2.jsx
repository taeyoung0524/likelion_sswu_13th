import React from 'react'
import Banner from "../../assets/img/Sec2_Title.png"
import Image1 from "../../assets/img/Sec2_img1.png"
import Image2 from "../../assets/img/Sec2_img2.png"
import Image3 from "../../assets/img/Sec2_img3.png"
import Image4 from "../../assets/img/Sec2_img4.png"

const Section2 = () => {
  return (
    <div className="container Section2"> 
      <div className="header">
        <img src={Banner} alt="" />
      </div>
      <div className="button_container">
        <button>ALL</button>
        <button>Apparel</button>
        <button>Dress</button>
        <button>Tshirt</button>
        <button>Bag</button>
      </div>
      <div className="box_container">
        <div className="box">
            <img src={Image1} alt="" />
            <div className="text_container">
                <h3>21WN reversible angora<br/>cardigan</h3>
                <p>$120</p>
            </div>
        </div>
        <div className="box">
            <img src={Image2} alt="" />
            <div className="text_container">
                <h3>21WN reversible angora<br/>cardigan</h3>
                <p>$120</p>
            </div>
        </div>
        <div className="box">
            <img src={Image3} alt="" />
            <div className="text_container">
                <h3>21WN reversible angora<br/>cardigan</h3>
                <p>$120</p>
            </div>
        </div>
        <div className="box">
            <img src={Image4} alt="" />
            <div className="text_container">
                <h3>Oblong bag</h3>
                <p>$120</p>
            </div>
        </div>
      </div>
      <div className="bottom">
        <button>Explore More →</button>
      </div>
    </div>
  )
}

export default Section2
