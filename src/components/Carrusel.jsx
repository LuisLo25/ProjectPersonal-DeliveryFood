import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow } from 'swiper/modules';

import pizza1 from '../assets/pizza1.svg';
import pancake from '../assets/pancake.svg';
import albondiga from '../assets/albondiga.svg';
import burger from '../assets/burger.svg';
import strawcake from '../assets/strawcake.svg';
import "../styles/Carrusel.css"

export function Carrusel(){
    const imgalimentos=[pizza1,pancake,albondiga,burger,strawcake]
    return(
        <div className="container">
  <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
       
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
      
        {  
        imgalimentos.map((v,i)=>(
            <SwiperSlide  key={i}>
            <img src={v} alt="" />
            </SwiperSlide>
        ))}
        
        </Swiper> 

        </div>
    )
}