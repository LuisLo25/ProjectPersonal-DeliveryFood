import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import person3_coment from "../assets/person3_coment.svg"
import person4_coment from "../assets/customer2.svg";
import person5_coment from "../assets/customer3.svg";
import mujer2_comida from "../assets/mujer2_comida.svg";
import { Autoplay,Navigation} from 'swiper/modules';

export function Carrusel3() {

    return (
        <>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true,
                }}
                
                navigation={true}
                modules={[Autoplay,Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide className='text-center text-[18px] grid grid-cols-2'>
                    <img className="!w-[435px] !h-[636px] shrink-0 ml-[350px]"src={mujer2_comida} alt=''></img>
                    <div className='!mt-[250px]' >
                        <h2 className='whitespace-nowrap text-5xl font-mono font-bold tracking-[0.48] leading-[62.4px] text-[#222224] text-start'>What they are says <br></br> about us</h2>
                        <div className='grid grid-cols-2 w-[250px] items-center -ml-[50px] pb-[10px]'>
                            <img className=' translate-x-[50px] !w-16 !h-16' src={person3_coment} alt="" />
                            <div className='flex flex-col items-start'>
                            <h3 className='whitespace-nowrap text-2xl font-mono font-semibold tracking-[0.24] leading-[24px]'>Erick Smith</h3>
                            <h3 className='whitespace-nowrap text-sm font-mono font-medium tracking-[0.14] leading-[14px] text-[#b6b4b4]'>Food Vlogger</h3>
                            </div>
                        </div>
                        <p className='text-xl font-mono tracking-[0.2] leading-[26px] text-[#b4b4b4] text-start'>“All service provided is so perfect and fast, and <br>
                        </br>im so happy to order from this company”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-center text-[18px] grid grid-cols-2'>
                <img className="!w-[435px] !h-[636px] shrink-0 ml-[350px]"src={mujer2_comida} alt=''></img>
                    <div className='!mt-[250px]' >
                        <h2 className='whitespace-nowrap text-5xl font-mono font-bold tracking-[0.48] leading-[62.4px] text-[#222224] text-start'>What they are says <br></br> about us</h2>
                        <div className='grid grid-cols-2 w-[250px] items-center -ml-[50px] pb-[10px]'>
                            <img className=' translate-x-[50px] !w-16 !h-16' src={person4_coment} alt="" />
                            <div className='flex flex-col items-start'>
                            <h3 className='whitespace-nowrap text-2xl font-mono font-semibold tracking-[0.24] leading-[24px]'>Pepito Dos Cañones</h3>
                            <h3 className='whitespace-nowrap text-sm font-mono font-medium tracking-[0.14] leading-[14px] text-[#b6b4b4]'>Food Vlogger</h3>
                            </div>
                        </div>
                        <p className='text-xl font-mono tracking-[0.2] leading-[26px] text-[#b4b4b4] text-start'>“All service provided is so perfect and fast, and <br>
                        </br>im so happy to order from this company”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-center text-[18px] grid grid-cols-2'>
                <img className="!w-[435px] !h-[636px] shrink-0 ml-[350px]"src={mujer2_comida} alt=''></img>
                    <div className='!mt-[250px]' >
                        <h2 className='whitespace-nowrap text-5xl font-mono font-bold tracking-[0.48] leading-[62.4px] text-[#222224] text-start'>What they are says <br></br> about us</h2>
                        <div className='grid grid-cols-2 w-[250px] items-center -ml-[50px] pb-[10px]'>
                            <img className=' translate-x-[50px] !w-16 !h-16' src={person5_coment} alt="" />
                            <div className='flex flex-col items-start'>
                            <h3 className='whitespace-nowrap text-2xl font-mono font-semibold tracking-[0.24] leading-[24px]'>Anacleto Pancracio</h3>
                            <h3 className='whitespace-nowrap text-sm font-mono font-medium tracking-[0.14] leading-[14px] text-[#b6b4b4]'>Food Vlogger</h3>
                            </div>
                        </div>
                        <p className='text-xl font-mono tracking-[0.2] leading-[26px] text-[#b4b4b4] text-start'>“All service provided is so perfect and fast, and <br>
                        </br>im so happy to order from this company”</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}