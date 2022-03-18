import React, { useState } from "react";
import "../CSS/Components/ngoCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


function NGOcarousel() {
  
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  fetch("https://project-manzil.herokuapp.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoad(false);
    });

  return (
    <div className="NCbody">
      <div className="NCswiper">
        {load ? <h2>Loading...</h2> : 
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="heroSwiperContainer"
      >
        {data.map((oneData) => <SwiperSlide className="swiperSlide">
          <div className="swiperDiv">
            <h2>Hello</h2>
            <h4>{oneData.productName}</h4> 
          </div>
        </SwiperSlide>)}
      </Swiper>
        }
      </div>
    </div>
  )
}

export default NGOcarousel;