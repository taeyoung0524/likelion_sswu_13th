import React from 'react'
import Heart from "../../assets/img/heart.png"
import productData from '../../product'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"


const Section02 = () => {
  return (
    <div className ="Section02_wrap">
      <h3>지금 많이 찾는 상품</h3>
      <ul>
        <li># 냉감티셔츠</li>
        <li># 에샤페</li>
        <li># 반팔티셔츠</li>
        <li># 페이토&샌들</li>
        <li># 인터런</li>
      </ul>
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
                  <p>{data.price}원</p>
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
