import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import pizza1 from '../assets/pizza1.svg';
import pancake from '../assets/pancake.svg';
import albondiga from '../assets/albondiga.svg';
import person1coment from '../assets/person1coment.svg'
import person2coment from '../assets/person2coment.svg'
import { EffectCoverflow } from 'swiper/modules';


export default function Carrusel2() {
    return (
      <>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          modules={[EffectCoverflow]}
          className="w-full pt-[50px] pb-[50px]  "
        >
          <SwiperSlide className='bg-center bg-cover px-[50px] py-[50px]'>
          
            <img src={pizza1} alt='figura1comen2' className='w-full block'/>
            <div className='-mt-[90px] mr-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Smith Teen</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
            <div className='-mt-[650px] ml-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Bella Wish</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-center bg-cover px-[50px] py-[50px]'>
            <img src={pancake} alt='figura2coment' className='w-full block'/>
            <div className='-mt-[90px] mr-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Smith Teen</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
            <div className='-mt-[650px] ml-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Bella Wish</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
          </SwiperSlide  >
          <SwiperSlide className='bg-center bg-cover px-[50px] py-[50px]'>
            <img src={albondiga} alt='figura3coment' className='w-full block'/>
            <div className='-mt-[90px] mr-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person1coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Smith Teen</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
            <div className='-mt-[650px] ml-[100px] flex flex-row '> 
                <div className='flex flex-rowshadow-[0px_4px_23px_0px_rgba(19,_31,_53,_0.05)] bg-slate-200 shadow-slate-500/50 flex flex-col justify-start gap-1 w-full h-32 px-4 rounded-lg z-10'>
                    <img className="!w-[30px] !h-[30px] shadow-slate-500/50 translate-x-[120px] translate-y-[30px]"src={person2coment} alt="" />
                    
                    <h3 className='text-[#000] font-mono text-xl whitespace-nowrap not-italic font-semibold leading-[26px] tracking-[0.2]'>Bella Wish</h3>
                    <h4 className='whitespace-nowrap text-xs font-mono font-medium tracking-[0.12] leading-[12px] text-[#b6b4b4]'>Food Vlogger</h4>
                    <p className='text-sm font-mono tracking-[0.14] leading-[18.2px] text-[#7a7a7a]'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
                
                </div> 
            </div>
          </SwiperSlide>
        
        </Swiper>
      </>
    );
  }