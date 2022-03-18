import React, { useState } from "react";
import "../CSS/Components/ngoCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {AiOutlineLoading3Quarters} from "react-icons/ai"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


function NGOcarousel() {
  
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  fetch("https://project-manzil.herokuapp.com/api/NGO")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoad(false);
    });

  return (
    <div className="NCbody">
      <div className="NCswiper">
        {load ? <div className="loading"><AiOutlineLoading3Quarters/></div> : 
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 500,
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
            <h2>{oneData.NGOName}</h2>
            <p>{oneData.salary}</p> 
          </div>
        </SwiperSlide>)}
      </Swiper>
        }
      </div>
    </div>
  )
}

export default NGOcarousel;