import React from 'react'
import Sneaker from "../../assets/img/image 10.png"
import Person from "../../assets/img/image 11.png"

const Section03 = () => {
  return (
    <div className="Section03_wrap">
      <h3>기획전</h3>
      <div className="photo_container">
        <div className="photo">
          <img src={Sneaker} alt="" />
          <p>FILA CUSTOM STUDIO</p>
          <button>자세히보기</button>
        </div>
        <div className="photo">
          <img src={Person} alt="" />
          <p>Pertex Life</p>
          <button>자세히보기</button>
        </div>
      </div>
    </div>
  )
}

export default Section03
