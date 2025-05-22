import React from 'react'
import Image1 from "../../assets/img/Rectangle 135.png"
import Heart from "../../assets/img/heart.png"
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
      <div className="Image-slider">
        <div className="item">
          <img src={Image1} alt="" />
          <div className="text1">
            <p>공용</p>
            <p>컴포트핏</p>
            <p>라이프스타일</p>
          </div>
          <div className="text2">
            <p>COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
          </div>
          <div className="price">
            <img src={Heart} alt="" />
            <p>49,000원</p>
          </div>
        </div>
        <div className="item">
          <img src={Image1} alt="" />
          <div className="text1">
            <p>공용</p>
            <p>컴포트핏</p>
            <p>라이프스타일</p>
          </div>
          <div className="text2">
            <p>COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
          </div>
          <div className="price">
            <img src={Heart} alt="" />
            <p>49,000원</p>
          </div>
        </div>
        <div className="item">
          <img src={Image1} alt="" />
          <div className="text1">
            <p>공용</p>
            <p>컴포트핏</p>
            <p>라이프스타일</p>
          </div>
          <div className="text2">
            <p>COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
          </div>
          <div className="price">
            <img src={Heart} alt="" />
            <p>49,000원</p>
          </div>
        </div>
        <div className="item">
          <img src={Image1} alt="" />
          <div className="text1">
            <p>공용</p>
            <p>컴포트핏</p>
            <p>라이프스타일</p>
          </div>
          <div className="text2">
            <p>COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
          </div>
          <div className="price">
            <img src={Heart} alt="" />
            <p>49,000원</p>
          </div>
        </div>
        <div className="item">
          <img src={Image1} alt="" />
          <div className="text1">
            <p>공용</p>
            <p>컴포트핏</p>
            <p>라이프스타일</p>
          </div>
          <div className="text2">
            <p>COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
          </div>
          <div className="price">
            <img src={Heart} alt="" />
            <p>49,000원</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section02
