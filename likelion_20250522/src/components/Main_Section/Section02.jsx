import React from 'react'
import Heart from "../../assets/img/heart.png"
import productData from '../../product'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { useState } from 'react'


const Section02 = () => {

  const [isClicked, setIsClicked] = useState("# 냉감티셔츠");

  return (
    <div className ="Section02_container">
      <h3>지금 많이 찾는 상품</h3>
      <div className="button_container">
        <button  className={isClicked === "# 냉감티셔츠" ? "active" : ""} onClick={() => setIsClicked("# 냉감티셔츠")}># 냉감티셔츠</button>
        <button  className={isClicked === "# 에샤페" ? "active" : ""} onClick={() => setIsClicked("# 에샤페")}># 에샤페</button>
        <button  className={isClicked === "# 반팔티셔츠" ? "active" : ""} onClick={() => setIsClicked("# 반팔티셔츠")}># 반팔티셔츠</button>
        <button  className={isClicked === "# 페이트&샌들" ? "active" : ""} onClick={() => setIsClicked("# 페이트&샌들")}># 페이토&샌들</button>
        <button  className={isClicked === "# 인터런" ? "active" : ""} onClick={() => setIsClicked("# 인터런")}># 인터런</button>
      </div>
      <Swiper 
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={10}
      >
        {productData.map((data, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="item">
                <img src={data.img} alt="" />
                <div className="text1">
                  <p>{data.tag1}</p>
                  <p>{data.tag2}</p>
                  <p>{data.tag3}</p>
                </div>
                <div className="text2">
                  <p>{data.name}</p>
                </div>
                <div className="price">
                  <img src={Heart} alt="" />
                  <p>{data.price}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Section02
