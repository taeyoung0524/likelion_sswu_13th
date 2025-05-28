import React from 'react'
import image1 from "../../assets/img/image 2.png"
import image2 from "../../assets/img/image 3.png"
import image3 from "../../assets/img/image 4.png"
import image4 from "../../assets/img/image 5.png"
import image5 from "../../assets/img/image 6.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Section01 = () => {
  return (
    <div className="Section01_container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{delay:3000, disableOnInteraction:false}}
        loop={true}
        slidesPerView={1}
        pagination={{
          type: 'progressbar', 
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="slide_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히보기</button>
          </div>
          <img src={image1} alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <div className="slide_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히보기</button>
          </div>
          <img src={image2} alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <div className="slide_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히보기</button>
          </div>
          <img src={image3} alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <div className="slide_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히보기</button>
          </div>
          <img src={image4} alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <div className="slide_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히보기</button>
          </div>
          <img src={image5} alt="" />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Section01
